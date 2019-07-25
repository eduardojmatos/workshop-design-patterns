import ReadCsv from  './read-csv';

class NewCrawler {
  constructor(url) {
    this.reader = new ReadCsv(url, this.onCrawled);
  }

  // TODO: fix
  onCrawled(document) {
    console.log('Documento foi processado');'
  }

  loadCollections() {
    return;
  }

  saveDocuments() {
  }
}
