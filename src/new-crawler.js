import ReadCsv from  './read-csv';

class NewCrawler {
  constructor(url) {
    this.reader = new ReadCsv(url, this.onCrawled);
  }

  onCrawled(document) {
    console.log('Documento foi processado');'
  }

  // TODO: fix
  loadCollections() {
    return;
  }

  // TODO: fix
  saveDocuments() {
  }
}
