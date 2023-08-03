const express = require('express');
const quizRouter = express.Router();
const quizController = require('../controllers/quizController');
const authMiddleware = require('../middlewares/authMiddleware');

quizRouter.post("/quiz", authMiddleware.authCheck, quizController.saveAnswers);
quizRouter.get("/quiz", authMiddleware.authCheck, quizController.getUserQuizAnswers);

module.exports = quizRouter;