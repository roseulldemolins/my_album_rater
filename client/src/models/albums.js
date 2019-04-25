const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

class Album {

  constructor() {

    this.data = null;

  }

  getData() {
    const url = 'http://localhost:3000/albums';
    const request = new RequestHelper(url);
    request.get()
      .then((data) => {
        this.data = data;
        PubSub.publish('Albums:DB-data-loaded', this.data);
      });
  }

  postData(entry) {
    const url = 'http://localhost:3000/albums';
    const request = new RequestHelper(url);
    request.post(entry)
      .then((entries) => {
        PubSub.publish('Albums:DB-data-loaded', entries);
      });
  }

  putData(entry) {
    const url = 'http://localhost:3000/albums';
    const request = new RequestHelper(url);
    request.put(entry)
      .then((entries) => {
        PubSub.publish('Albums:DB-data-loaded', entries);
      });
  }

  deleteData(entry) {
    const url = 'http://localhost:3000/albums';
    const request = new RequestHelper(url);
    request.delete(entry)
      .then((entries) => {
        PubSub.publish('Albums:DB-data-loaded', entries);
      });
  }

}

module.exports = Album;
