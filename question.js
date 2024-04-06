import readline from "readline"

// Define your multiple-choice questions



const questions = [
    {
        question: "What is Node.js?",
        options: [
            "A front-end JavaScript framework",
            "A back-end JavaScript runtime",
            "A database management system",
            "A web browser"
        ],
        correctAnswer: "A back-end JavaScript runtime"
    },
    {
        question: "What is a module in Node.js?",
        options: [
            "A single JavaScript file",
            "A function that takes a callback",
            "A reusable piece of code organized in files",
            "A package manager for Node.js"
        ],
        correctAnswer: "A reusable piece of code organized in files"
    },
    {
        question: "What is CommonJS?",
        options: [
            "A JavaScript library",
            "A module system for Node.js",
            "A package manager for Node.js",
            "A Node.js event emitter"
        ],
        correctAnswer: "A module system for Node.js"
    },
    {
        question: "What is the purpose of the 'require' function in Node.js?",
        options: [
            "To define a new variable",
            "To include external modules",
            "To create a new instance of a class",
            "To declare a function"
        ],
        correctAnswer: "To include external modules"
    },
    {
        question: "What is a callback function in Node.js?",
        options: [
            "A function that is called after a certain operation is completed",
            "A function used to handle HTTP requests",
            "A function that initializes a Node.js application",
            "A function that is called before an event occurs"
        ],
        correctAnswer: "A function that is called after a certain operation is completed"
    },
    {
        question: "What is the event loop in Node.js?",
        options: [
            "A loop that handles HTTP requests",
            "A loop that waits for user input",
            "A loop that executes asynchronous tasks",
            "A loop that iterates through an array of events"
        ],
        correctAnswer: "A loop that executes asynchronous tasks"
    },
    {
        question: "What is the purpose of the 'exports' object in Node.js?",
        options: [
            "To import modules",
            "To define global variables",
            "To export functions or objects from a module",
            "To handle HTTP requests"
        ],
        correctAnswer: "To export functions or objects from a module"
    },
    {
        question: "What is npm?",
        options: [
            "Node Package Manager",
            "Node Project Manager",
            "Node Programming Module",
            "Node Package Module"
        ],
        correctAnswer: "Node Package Manager"
    },
    {
        question: "What is the purpose of package.json in a Node.js project?",
        options: [
            "To store the project's source code",
            "To define project dependencies and metadata",
            "To manage HTTP requests",
            "To create a database connection"
        ],
        correctAnswer: "To define project dependencies and metadata"
    },
    {
        question: "Which method is used to handle errors in asynchronous code in Node.js?",
        options: [
            "try-catch block",
            "if-else statement",
            "switch-case statement",
            "callback functions"
        ],
        correctAnswer: "callback functions"
    },
    {
        question: "What is a stream in Node.js?",
        options: [
            "A continuous flow of data",
            "A type of module",
            "An event emitter",
            "A type of HTTP request"
        ],
        correctAnswer: "A continuous flow of data"
    },
    {
        question: "What is the purpose of the 'Buffer' class in Node.js?",
        options: [
            "To handle file operations",
            "To handle HTTP requests",
            "To store binary data",
            "To define custom data types"
        ],
        correctAnswer: "To store binary data"
    },
    {
        question: "What is the role of the 'process' object in Node.js?",
        options: [
            "To handle file operations",
            "To provide information about the current process",
            "To manage HTTP requests",
            "To define custom data types"
        ],
        correctAnswer: "To provide information about the current process"
    },
    {
        question: "What is middleware in the context of Express.js?",
        options: [
            "A front-end JavaScript framework",
            "A back-end JavaScript runtime",
            "A function that handles HTTP requests",
            "A function that processes requests before they reach route handlers"
        ],
        correctAnswer: "A function that processes requests before they reach route handlers"
    },
    {
        question: "What is the purpose of the 'dotenv' module in a Node.js project?",
        options: [
            "To define environment variables",
            "To handle HTTP requests",
            "To define global variables",
            "To create a database connection"
        ],
        correctAnswer: "To define environment variables"
    }
];
export default questions;




// Function to present questions and get user input
export function askQuestion(questionObj, callback) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question(`${questionObj.question} (${questionObj.options.join(', ')}): `, (answer) => {
        rl.close();
        callback(answer);
    });
}

// Function to check if the answer is correct
export function checkAnswer(questionObj, userAnswer) {
    return userAnswer.toLowerCase() === questionObj.correctAnswer.toLowerCase();
}

// Function to start the quiz
export function startQuiz() {
    let score = 0;
    let questionIndex = 0;

    function nextQuestion() {
        if (questionIndex < questions.length) {
            askQuestion(questions[questionIndex], (answer) => {
                if (checkAnswer(questions[questionIndex], answer)) {
                    console.log("Correct!");
                    score++;
                } else {
                    console.log("Incorrect!");
                }
                questionIndex++;
                nextQuestion();
            });
        } else {
            console.log(`Quiz finished! Your score is ${score}/${questions.length}`);
        }
    }

    nextQuestion();
}

// Start the quiz
startQuiz();
