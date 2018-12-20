DROP DATABASE IF EXISTS myCar_db;
CREATE DATABASE myCar_db;

\c myCar_db;

CREATE TABLE users(
  id serial primary key,
  email varchar UNIQUE NOT NULL,
  password_digest varchar NOT NULL,
  customer varchar,
);

INSERT INTO users (email, password_digest, customer) VALUES(ali, 123456, 'yes')


CREATE TABLE cars(
  id serial primary key,
  make int ,
  model  int,
  yeah varchar,
);
INSERT INTO cars (nissan, bmw, jeeb, ford, lexus)
VALUES (gtr , 730, wrangler, mustange, gs300 )