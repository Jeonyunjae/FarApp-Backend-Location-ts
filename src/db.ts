import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "FarApp_Location",
  password: "1234",
  port: 5433,
});

pool.connect((err) => {
  if (err) {
    console.log("Failed to connect db " + err);
  } else {
    console.log("Connect to db done!");
  }
});

export function dbConnect() {
  pool.connect((err) => {
    if (err) {
      console.log("Failed to connect db " + err);
    } else {
      console.log("Connect to db done!");
    }
  });
}

export function dbDisConnect(params: any) {
  pool
    .end()
    .then(() => console.log("client has disconnected"))
    .catch((err) => console.error("error during disconnection", err.stack));
}

module.exports = pool;
