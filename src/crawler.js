/**
 * Created by johnciclus on 7/02/17.
 **/
(function () {
	"use strict";

	const fs = require("fs");
	const csvTransform = require("csv-to-json-stream")
	const stream = require("stream")
	const Transform = stream.Transform
	const transformStream = new Transform({
		transform(chunk, encoding, callback) {
			callback(null, chunk);
		}
	});
	let log = [];

	let methods = {
		loadCollections: function(Mongo, fields){
			return new Promise(function (resolve, reject) {
				let collection = [];
				let collections = [];
				let collectionMap = {};
				let queries = [];
				let fieldsMap = {};
				let key = "";

				for (let field in fields){
					if (fields.hasOwnProperty(field)) {
						if (typeof(fields[field]) === "object" &&
							(fields[field].type === "Reference" ||
								fields[field].type === "ReferencesArray")) {
							queries.push({"collection": fields[field].collection, "query": {}});
							fieldsMap[fields[field].collection] = fields[field];
						}
					}
				}


				methods.sequentialPromise(Mongo.find, queries).then((response) => {
					for (let query in queries){
						collectionMap = {};
						collection = response.shift();
						collection.forEach(function (row) {
							//row.name.toLowerCase()
							key = fieldsMap[queries[query].collection].key;
							collectionMap[row[key].trim().toLowerCase()] = row;
						});
						collections[queries[query].collection.trim().toLowerCase()] = collectionMap;
					}
					resolve(collections);
				}).catch(function (error){
					reject(error);
				});
			});
		},
		saveDocuments: function (Mongo, scheme, documents){
			return new Promise(function (resolve, reject) {
				//let docs = [];

				//for (let i = 0; i < documents.length; i += 1) {
				//	docs.push({"collection": scheme.db_scheme.collection, doc: documents[i]});

				//}

				Mongo.insertMany({"collection": scheme.db_scheme.collection, docs: documents}).then(function(response){
					log.push("Response: "+response.insertedCount+" documents created");
					resolve();
				}).catch(function (error){
					reject(error);
				});

				//methods.sequentialPromise(Mongo.insert, docs).then((response) => {
				//	log.push("Response: " + response.length + " documents created");
				//	resolve();
				//}).catch(function (error){
				//	reject(error);
				//});
			});
		},
		sequentialPromise: function(method, data, responses = [], i = 0){
			return new Promise(function (resolve){
				if (method && data && data[i]) {
					// console.log("calling sequential promise" + data[i]);
					return method(data[i]).then(function(response) {
						responses.push(response);
						resolve(methods.sequentialPromise(method, data, responses, i + 1));
					});
				} else {
					resolve(responses);
				}
			});
		}
	};

	module.exports =  {
		"exportToDB": function (file, scheme, Mongo) {
			return new Promise(function (resolve) {
				const fields = scheme.db_scheme.fields;
				methods.loadCollections(Mongo, fields).then(function (collections){
					const bulkSize = 1000;
					let count = 0;
					let documents = [];
					let initialTime = Date.now();
					let field = "";
					let collection = "";
					let id = "";
					let count_invalid = 0;
					log = [];

					transformStream.on("data", function(chunk){
						if (documents.length < bulkSize){
							let document = JSON.parse(chunk.toString());

							Object.keys(document).forEach(function (key) {
								field = fields[key];
								if (field && field.type && document[key] && document[key] !== "") {
									if (field.type === "Reference") {
										collection = field.collection.trim().toLowerCase();
										id = document[key].trim().toLowerCase();
										if (collections[collection] && collections[collection][id])
											document[key] = collections[collection][id];
										else {
											count_invalid++;
											console.log("document "+id+" not found in collection: "+collection);
										}
									}
									if (field.type === "ReferencesArray") {
										let references = document[key];
										document[key] = [];
										collection = field.collection.trim().toLowerCase();
										references.split(",").forEach(function(reference){
											id = reference.trim().toLowerCase();
											if (collections[collection] && collections[collection][id])
												document[key].push(collections[collection][id]);
											else {
												console.log("document "+id+" not found in collection: "+collection);
											}
										});
									}
								}
								if (typeof document[key] === "string") {
									document[key] = document[key].trim()
								}
								else if (key === "email") {
									document[key] = document[key].toLowerCase()
								}
							});
							documents.push(document);
							count++;
						}
						if (documents.length === bulkSize) {
							this.pause();
							log.push(count + " documents loaded");
							methods.saveDocuments(Mongo, scheme, documents).then(() => {
								console.log("documents saved");
								this.resume();
								documents = [];
							});
						}
					});

					fs.createReadStream(file.path).on("end", () => {
						setTimeout(() => {
							log.push(count + " documents loaded");
							methods.saveDocuments(Mongo, scheme, documents).then(() => {
								documents = [];
								console.log("count_invalid: "+ count_invalid);
								log.push("Total time:" +(Date.now()-initialTime));
								resolve();
							});
						},100);
					})
					.on("close", function(){

					})
					.on("error", function(err){
						process.stdout.write("\nerror" + err);
					})
					.pipe(csvTransform(scheme.csv))
					.pipe(transformStream);
				}).catch(function (error){
					process.stdout.write("\n" + error);
				});
			});
		},
		"getScheme": function(){
			return new Promise(function (resolve, reject) {
				fs.readFile(__dirname + "/../../client/etc/schemes/users_scheme.json", "utf8", (err, data) => {
					if (err) {
						reject(err);
					} else {
						resolve({"data": data});
					}
				});
			});
		},
		"getStatus": function(){
			return {
				"log": log
			};
		}
	}
}());
