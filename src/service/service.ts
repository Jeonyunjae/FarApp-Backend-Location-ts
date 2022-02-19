import { Pool, QueryResult } from "pg";
import { getQueryLocation } from "../query/queries";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "1234",
  port: 5433,
});

export const getServiceLocation = async (): Promise<QueryResult> => {
  return await pool.query(getQueryLocation);
};
