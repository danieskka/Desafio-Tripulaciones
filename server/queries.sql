-- Create User Table

CREATE TABLE users (
    user_id SERIAL NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    age INT,
    location VARCHAR(100),
    login BOOLEAN DEFAULT false,
    PRIMARY KEY (user_id)
);