const sqlite3 = require('sqlite3').verbose();

class Database {
  run() {
    let db = new sqlite3.Database('db/database.db', (err) => {
      if (err) { return console.error(err.message) };
      console.log('Connected to the in-memory sqlite database');
    });
    db.close((err) => {
      if (err) { return console.error(err.message) };
      console.log('Closed the database connection');
    });
  }
}

module.exports = Database;
