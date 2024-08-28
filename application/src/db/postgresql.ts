import pg from "pg";

const { Pool } = pg;

const config: pg.PoolConfig = {
  connectionString: process.env.DATABASE_PATH,
  ssl: false,
};

export const psqlConnector = new Pool(config);
