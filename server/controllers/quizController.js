const quiz = require('../models/quiz');
const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;

const saveAnswers = async (req, res) => {
    let user_id = req.decoded.data[0].user_id;
    let { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, total} = req.body;
    try {
        await quiz.postAnswers({ user_id, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, total});

        res.status(200).json({
            "saved answers": `user id:${user_id} saved their answers`,
            msj: "Answers added to database"
        })
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

const getUserQuizAnswers = async (req, res) => {
    try {
        const token = req.cookies["access-token"];
        const decoded = jwt.verify(token, jwtSecret);
        const user_id = req.decoded.data[0].user_id;
        let data = await quiz.getUserAnswers(user_id);
        console.log(data);

        if (!data[0]) {
            console.log("There are no previous games");
        } else {
            let quizGames = data.map(item => item.total);
            console.log("Previous games: ",quizGames);
            res.status(200).json({
                "msj": "User previous games supplied",
                "previousGames": quizGames
            });
        }

    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

module.exports = {
    saveAnswers,
    getUserQuizAnswers
}