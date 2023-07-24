const users_queries = { 
    createUser:`INSERT INTO users(
        email, password, age, location)
        VALUES ($1, $2, $3, $4)`,
    getUsersByEmail: `SELECT email, 
        password, 
        age,
        location,
        user_id,
        login
        FROM users
        WHERE email = $1;`,
    updateUser: `UPDATE users
        SET age=$4, email=$2, password=$3
        WHERE email = $1;`,
    loggedTrue: `UPDATE users
        SET login = true
        WHERE email=$1;`,
    loggedFalse: `UPDATE users
        SET login = false
        WHERE email=$1`
}

module.exports = users_queries;