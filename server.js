
import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import cors from "cors";

// file imports
import connectDB from "./config/db.js";
import questions from "./question.js";
import { askQuestion, checkAnswer, startQuiz } from "./question.js";

// config dot env
dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev')); 

app.get('/', (req, res) => {
    res.send('Welcome to the Quiz App!');
});

// Define routes
app.get('/api/v1/MCQs', (req, res) => {
    res.json(questions);
});

app.post('/api/v1/askMCQs', (req, res) => {
    // Handle asking questions
    // Assuming req.body contains the question to ask
    const question = req.body.question;
    const answer = askQuestion(question);
    res.json({ answer });
});

app.post('/api/v1/checkMCQs', (req, res) => {
    // Handle checking answers
    // Assuming req.body contains the question and the user's answer
    const question = req.body.question;
    const userAnswer = req.body.answer;
    const isCorrect = checkAnswer(question, userAnswer);
    res.json({ isCorrect });
});

app.get('/api/v1/StartQuiz', (req, res) => {
    startQuiz();
    res.json({ message: 'Quiz started' });
});

const PORT = process.env.PORT || 4000;
// Listen
app.listen(PORT, () => {
    console.log(`Node server running in ${process.env.DEV_MODE} Mode on port ${PORT}`.bgCyan.white);
});
