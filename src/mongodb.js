const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://realign-mongo_extnetwork:27017';

module.exports = () => {
  return new Promise((resolve, reject) => {
    const __DB = 'mytest';
    MongoClient.connect(url, function (err, db) {
      if (err) {
        reject(err);
        throw err;
      }
      const dbo = db.db(__DB);
      dbo.collection(__DB).find().toArray(function (err, result) {
        if (err) {
          reject(err);
          throw err;
        }
        console.log(result);
        resolve(result);
        db.close();
      });
    });
  });
};