const pool = require('../utils/db_pgsql');
const queries = require('../queries/user.queries');


/** 
  * <pre>
  *
  * </pre>
  * @memberof models 
  * @method createUser  Conecta con las queries que guardan los datos que llegan por el body de la petición POST en la BBDD tabla users
  * @method getUsersByEmail  Recoge de la BBDD las partidas y resultados del usuario según el id de usuario Primary Key de la BBDD
  * @method updateUser  Permite modificar campos de datos de usuario en tabla users.
  * @method logInUserTrue 
  * @method logInUserFalse
  * @async 
  */



const createUser = async (newUser) => {
    const { email, password, username, birth_date, gender, zip_code, number_of_children } = newUser;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.createUser,[email, password, username, birth_date, gender, zip_code, number_of_children])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } 
    finally {
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