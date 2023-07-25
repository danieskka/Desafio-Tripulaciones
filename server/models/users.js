const pool = require('../utils/db_pgsql');
const queries = require('../queries/user.queries');


const createUser = async (newUser) => {
    const { email, password, age, location } = newUser;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.createUser,[email, password, age, location])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}
  
const getUsersByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getUsersByEmail, [email])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}
const updateUser = async (user) => {
    const { name, email, password, new_email } = user;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.updateUser,[name, email, password, new_email])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const logInUserTrue = async(email) => {
    let client, result;
    try {
        client = await pool.connect();
        let data = await client.query(queries.loggedTrue, [email]);
        result = data.rows;
    } catch(err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}
 
const logInUserFalse = async(email) => {
    let client, result;
    try {
        client = await pool.connect();
        let data = await client.query(queries.loggedFalse, [email]);
        result = data.rows;
    } catch(err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const users_queries = {
    createUser,
    getUsersByEmail,
    updateUser,
    logInUserFalse,
    logInUserTrue
}

module.exports = users_queries;