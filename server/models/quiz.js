const pool = require('../utils/db_pgsql');
const queries = require('../queries/quiz.queries');


/** 
  * <pre>
  * GET http://localhost:3000/quiz  -->  Recoge datos de las diferentes partidas de usuario desde la BBDD
  * POST  http://localhost:3000/quiz -->   Guarda los resultados de la partida de usuario en tabla quiz_answers
  * </pre>
  * @memberof models 
  * @method postAnswers  Guarda las respuestas de usuario que se le envían desde el front en el quiz y las envía a la BBDD en tabla quiz_answers
  * @method getUserAnswers  Recoge de la BBDD las partidas y resultados del usuario según el id de usuario Primary Key de la BBDD
  * @async 
  */


const postAnswers = async ({ user_id, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, total}) => {
    let client, result;
    try {
        client = await pool.connect();

        const data = await client.query(queries.addAnswers, [user_id, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, total]);
        result = data.rowCount;
        console.log(result);
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};

const getUserAnswers = async (user_id) => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getAnswers, [user_id])
        result = data.rows;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}

module.exports = {
    postAnswers,
    getUserAnswers
};