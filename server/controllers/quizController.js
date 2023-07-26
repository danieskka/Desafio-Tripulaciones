const quiz = require('../models/quiz');

const saveAnswers = async (req, res) => {
    let { user_id, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10} = req.body;
    try {
        await quiz.postAnswers({ user_id, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10});

        res.status(200).json({
            "saved answers": `user id:${user_id} saved their answers`,
            msj: "Answers added to database"
        })
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

module.exports = {
    saveAnswers
}