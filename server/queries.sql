-- Create User Table

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(50),
    zip_code VARCHAR(100),
    number_of_children INT,
    created_date DATE DEFAULT CURRENT_DATE,
    login BOOLEAN DEFAULT false
);


CREATE TABLE quiz_answers (
    user_id INT,
    Q1 VARCHAR (1),
    Q2 VARCHAR  (1),
    Q3 VARCHAR  (1),
    Q4 VARCHAR  (1),
    Q5 VARCHAR  (1),
    Q6 VARCHAR  (1),
    Q7 VARCHAR  (1),
    Q8 VARCHAR  (1),
    Q9 VARCHAR  (1),
    Q10 VARCHAR  (1),
    total INT
    FOREIGN KEY (user_id) REFERENCES users(user_id)
    ON DELETE CASCADE
);


-- Crear usuario Ej:
INSERT INTO userss (email, password, username, birth_date, gender, zip_code, number_of_children)
VALUES ('ejemplo@email.com', 'contraseña123', 'nombre_usuario', '1990-01-01', 'masculino', '12345', 2);