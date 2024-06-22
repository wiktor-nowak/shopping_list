import { Pool } from "pg";

const dbPool = new Pool({
  user: "postgres",
  password: "wiktor12345",
  host: "localhost",
  port: 5432,
  database: "shopping_list"
});

export default dbPool;
