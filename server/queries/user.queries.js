const users_queries = { 
    createUser:`INSERT INTO users(
        email, password, username, birth_date, gender, zip_code, number_of_children)
        VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    getUsersByEmail: `SELECT email, 
        password, 
        birth_date,
        zip_code,
        user_id,
        gender,
        number_of_children,
        login
        FROM users
        WHERE email = $1;`,
    updateUser: `UPDATE users
        SET birth_date=$4, email=$2, password=$3
        WHERE email = $1;`,
    loggedTrue: `UPDATE users
        SET login = true
        WHERE email=$1;`,
    loggedFalse: `UPDATE users
        SET login = false
        WHERE email=$1`
}

module.exports = users_queries;