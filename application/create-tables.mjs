import pg from "pg";
const { Pool } = pg;

const queryString = `
CREATE SEQUENCE IF NOT EXISTS file_description_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
CREATE SEQUENCE IF NOT EXISTS file_info_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
CREATE SEQUENCE IF NOT EXISTS files_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
CREATE SEQUENCE IF NOT EXISTS posters_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
CREATE SEQUENCE IF NOT EXISTS type_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
CREATE SEQUENCE IF NOT EXISTS users_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
CREATE SEQUENCE IF NOT EXISTS watched_files_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

CREATE TABLE IF NOT EXISTS posters (
    id integer NOT NULL DEFAULT nextval('posters_id_seq'),
    original_source character varying(250) NOT NULL,
    size character varying(250),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS types (
    id integer NOT NULL DEFAULT nextval('type_id_seq'),
    name character varying(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS files (
    id integer NOT NULL DEFAULT nextval('files_id_seq'),
    type_id integer NOT NULL,
    poster_id integer NOT NULL,
    name character varying(250) NOT NULL,
    original_source character varying(250) NOT NULL,
    "time" date NOT NULL,
    file_id integer,
    PRIMARY KEY (id),
    FOREIGN KEY (file_id) REFERENCES files(id) ON DELETE SET NULL,
    FOREIGN KEY (poster_id) REFERENCES posters(id) ON DELETE SET NULL,
    FOREIGN KEY (type_id) REFERENCES types(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS file_description (
    id integer NOT NULL DEFAULT nextval('file_description_id_seq'),
    file_id integer NOT NULL,
    original_name character varying(250) NOT NULL,
    description text,
    date date,
    status boolean,
    duration bigint,
    box_office character varying,
    budget character varying,
    PRIMARY KEY (id),
    FOREIGN KEY (file_id) REFERENCES files(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS file_info (
    id integer NOT NULL DEFAULT nextval('file_info_id_seq'),
    file_id integer NOT NULL,
    duration bigint NOT NULL,
    size bigint NOT NULL,
    format character varying(25) NOT NULL,
    original_name character varying(250) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (file_id) REFERENCES files(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS users (
    id integer NOT NULL DEFAULT nextval('users_id_seq'),
    name character varying(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS watched_files (
    id integer NOT NULL DEFAULT nextval('watched_files_id_seq'),
    user_id integer NOT NULL,
    file_id integer,
    "time" bigint,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (file_id) REFERENCES files(id) ON DELETE SET NULL
);
`;

export const createTables = async (errorString) => {
  const connector = new Pool({
    connectionString: process.env.DATABASE_PATH,
    ssl: false,
  });

  const client = await connector.connect();

  try {
    await client.query(queryString);
  } catch (error) {
    throw new Error(
      `${errorString} can not create table. Error message: ${error.message}.`,
    );
  } finally {
    await client.end();
  }
};
