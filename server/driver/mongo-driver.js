const mongoose = require('mongoose').set('debug', true);

const mongoIP = '127.0.0.1';
const mongoPort = '27017';
const mongoCollection = 'cinema';
const URI = `mongodb://${mongoIP}:${mongoPort}/${mongoCollection}`;

const db = mongoose.connect(URI, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Successfully connected to MongoDB @ ${mongoIP}:${mongoPort}`);
  }
});
module.exports = db;
