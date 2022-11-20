const { Pool } = require("pg");
const connectionString = process.env.DB_URL;
const pool = new Pool({
  connectionString,
});

module.exports = pool;

// this function will create new Table in the database
const createTable = () => {

  pool
  .query(
    `CREATE TABLE doner_givin(
      id SERIAL NOT NULL ,
      description TEXT,
      amount FLOAT,
      address VARCHAR(255),
      doner_id INT,
      case_id INT,
      is_deleted SMALLINT DEFAULT 0,
  
      deleveryDate VARCHAR(255),
       imgePathDoner TEXT,
       category_id INT,
     created_at TIMESTAMP DEFAULT now(),
       FOREIGN KEY (category_id) REFERENCES donations_Category(id),
       FOREIGN KEY(case_id) REFERENCES needy_Case(id),
       FOREIGN KEY (doner_id) REFERENCES users(id),
       PRIMARY KEY (id)
     );`)
  .then((result) => {
    console.log("result", result);
  })
  .catch((err) => {
    console.log(err);
  });
};
  
  // createTable()
