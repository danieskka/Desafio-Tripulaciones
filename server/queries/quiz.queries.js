const quiz_queries = {

    addAnswers: `INSERT INTO quiz_answers
        (user_id, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, total)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
    getAnswers: `SELECT total
        FROM quiz_answers
        WHERE user_id = $1;`
        
}

module.exports = quiz_queries;