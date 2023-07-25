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

-- Crear usuario Ej:

INSERT INTO userss (email, password, username, birth_date, gender, zip_code, number_of_children)
VALUES ('ejemplo@email.com', 'contraseña123', 'nombre_usuario', '1990-01-01', 'masculino', '12345', 2);