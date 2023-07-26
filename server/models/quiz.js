const pool = require('../utils/db_pgsql');
const queries = require('../queries/quiz.queries');

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