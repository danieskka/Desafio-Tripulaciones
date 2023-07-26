const express = require('express');
const quizRouter = express.Router();
const quizController = require('../controllers/quizController');

quizRouter.post("/quiz", quizController.saveAnswers);
quizRouter.get("/quiz", aut)

module.exports = quizRouter;