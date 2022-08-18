CREATE DATABASE firstapi;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    apellido VARCHAR(40),
    nit VARCHAR(40),
    email TEXT
);

INSERT INTO users (name, apellido, nit, email) VALUES 
('John', 'Valeriano', '1001344669', 'John@gmail.com'),
('Andres', 'Villegas', '1234567890', 'Andres@gmail.com');
