const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-contener");
const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer-button");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
currentQuestionIndex++;
setNextQuestion();
});

function startGame() {
startButton.classList.add("hide");
shuffledQuestions = questions.sort(() => Math.random() - 0.5);
currentQuestionIndex = 0;
questionContainerElement.classList.remove("hide");
setNextQuestion();
}

function setNextQuestion() {
resetState();
showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
questionElement.innerText = question.question;
question.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonElement.appendChild(button);
});
}

function resetState() {
clearStatusClass(document.body);
nextButton.classList.add("hide");
while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
}
}

function selectAnswer(e) {
const selectedButton = e.target;
const correct = selectedButton.dataset.correct;
setStatusClass(document.body, correct);
Array.from(answerButtonElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
});
if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
} else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
}
}

function setStatusClass(element, correct) {
clearStatusClass(element);
if (correct) {
    element.classList.add("correct");
} else {
    element.classList.add("wrong");
}
}

function clearStatusClass(element) {
element.classList.remove("correct");
element.classList.remove("wrong");
}



const question = [
    {
        question: "what is 2 + 2?",
        answers: [
            { text: "4", correct: true },
            { text: "22", correct: false},
        ],
    },
    {
        question: "What is the capital of India?",
        answers : [
            { text: "Delhi", correct: true },
            { text: "Mumbai", correct: false },
            { text: "kolkata", correct: false },
            { tetx: "Goa", correct: false },
        ],
    },
    {
        question: "What is the most popular and most watched sport in India?",
        answer : [
            { text: "Football", correct: false },
            { text: "cricket", correct: true },
            { text: "hocky", correct:false },
            { text: "batminton", correct: false },
        ],
    },
    {
        question: "Which of these colours cannot be found in the Indian Flag?",
        answers : [
            { text: "Red", correct: false },
            { text: "white", correct: true },
        ],
    },
    {
        question: "When was the movie ‘The Godfather’ released?",
        answers : [
            { text: "1933", correct: false },
            { text: "1943", correct: false },
            { text: "19353", correct: false },
            { text: "1972", correct: true },
        ],
    },
    {
        question: "What ingredient is not used to make a Ratatouille?",
        answers : [
            { text : "Courgette", correct: false },
            { text : "Aubergine", correct: false },
            { text : "Spinach", correct: false },
            { text : "Tamato", correct: false },
        ],
    },
    {
        question: "When did the construction of the Golden Gate Bridge in San Francisco start?",
        answers : [
            { text : "1976", correct: false },
            { text : "1933", correct: true },
            { text : "1989", correct: false },
            { text : "1947", correct: false },
        ],
    },
    {
        question: "On which time zone is London?",
        answers : [
            { text : "Greenwich Mean Time", correct: true },
            { text : "Central European Standard Time", correct: false },
            { text : "Australian Eastern Daylight Time", correct: false },
            { text : "Eastern Standard Time", correct: false },
        ],
    },
    {
        question: "When was the book ‘Of Mice and Men’ by John Steinbeck first published?",
        answers : [
            { text : "1927", correct: false },
            { text : "1937", correct: true },
            { text : "1957", correct: false },
            { text : "1987", correct: false },
        ],
    },
    {
        question: "Which of the following is a literature prize?",
        answers : [
            { text : "Academy Awards", correct: false },
            { text : "Grammy Awards", correct: false },
            { text : "Pulitzer Prize", correct: true },
            { text : "Golden Globe Awards", correct: false },
        ],
    },
    {
        question: "How many bones are there in an adult human body??",
        answers : [
            { text : "206", correct: true },
            { text : "209", correct: false },
            { text : "201", correct: false },
            { text : "237", correct: false },
        ],
    },
    {
        question: "When did Friends air for the first time?",
        answers : [
            { text : "1984", correct: false },
            { text : "1985", correct: false },
            { text : "1994", correct: true },
            { text : "1987", correct: false },
        ],
    },
    {
        question: "Who was the president of the United States during the Cuban missile crisis?",
        answers : [
            { text : "John F. Kennedy", correct: true },
            { text : "Lyndon B. Johnson", correct: false },
            { text : "Richard Nixon", correct: false },
            { text : "Dwight D. Eisenhower", correct: false },
        ],
    },
    {
        question: "How long is a marathon?",
        answers : [
            { text : "42.195 km", correct: true },
            { text : "32.195 km", correct: false },
            { text : "22.195 km", correct: false },
            { text : "52.195 km", correct: false },
        ],
    },
    {
        question: "When was Netflix launched?",
        answers : [
            { text : "2002", correct: false },
            { text : "1998", correct: true },
            { text : "2006", correct: false },
            { text : "2010", correct: false },
        ],
    },
    {
        question: "When did Seinfeld air for the first time?",
        answers : [
            { text : "1991", correct: false },
            { text : "1993", correct: false },
            { text : "1989", correct: true },
            { text : "1987", correct: false },
        ],
    },
    {
        question: "When was the Mona Lisa stolen from Le Louvre? ",
        answers : [
            { text : "1941", correct: false },
            { text : "1931", correct: false },
            { text : "1921", correct: false },
            { text : "1911", correct: true },
        ],
    },
    {
        question: "How many people visited New York City in 2019?",
        answers : [
            { text : "33.3 million", correct: false },
            { text : "44.4 million", correct: false },
            { text : "55.5 million", correct: false },
            { text : "66.6 million", correct: true },
        ],
    },
    {
        question: "When was the first Nobel Prize awarded?",
        answers : [
            { text : "1901", correct: true },
            { text : "1921", correct: false },
            { text : "1941", correct: false },
            { text : "1961", correct: false },
        ],
    },
    {
        question: "In which US city is the telenovela Jane the Virgin set?",
        answers : [
            { text : "New York City", correct: false },
            { text : "Houston", correct: false },
            { text : "Los Angeles", correct: false },
            { text : "Miami", correct: true },
        ],
    },
    {
        question: "When was Emma Watson born?",
        answers : [
            { text : "1980", correct: false },
            { text : "1985", correct: false },
            { text : "1990", correct: true },
            { text : "1995", correct: false },
        ],
    },
    {
        question: "Which voting system is used for the members of parliament in the UK?",
        answers : [
            { text : "Single Transferable Vote", correct: false },
            { text : "First Past The Post", correct: false },
            { text : "Two-Round System  ", correct: true },
            { text : "Alternative Vote", correct: false },
        ],
    },
    {
        question: "Which car manufacturer made the Beetle?",
        answers : [
            { text : "Volkswagen", correct: true },
            { text : "Ford", correct: false },
            { text : "Aston Martin", correct: false },
            { text : "Toyota", correct: false },
        ],
    },
    {
        question: "When was the first issue of the New York Times published?",
        answers : [
            { text : "1851", correct: true },
            { text : "1871", correct: false },
            { text : "1891", correct: false },
            { text : "1901", correct: false },
        ],
    },
    {
        question: "Which of these countries does not share a border with India?",
        answers : [
            { text : "Bangladesh", correct: false },
            { text : "China", correct: false },
            { text : "Afghanistan", correct: false },
            { text : "Cambodia", correct: true },
        ],
    },
    {
        question: "Which country is India’s largest trading partner?",
        answers : [
            { text : "United States", correct: true },
            { text : "China", correct: false },
            { text : "Afghanistan", correct: false },
            { text : "Russia", correct: false  },
        ],
    },
    {
        question: "How many years is the term of the President of India?",
        answers : [
            { text : "Five", correct: true },
            { text : "Six", correct: false },
            { text : "Four", correct: false },
            { text : "Eight", correct: false  },
        ],
    },
    {
        question: "What percentage of India’s population practises buddhism?",
        answers : [
            { text : "20 %", correct: false },
            { text : "0.7 %", correct: true },
            { text : "50 %", correct: false },
            { text : " 7 %", correct: false  },
        ],
    },
    {
        question: "How many World Cups has India’s cricket team won?",
        answers : [
            { text : "2", correct: false },
            { text : "3", correct: false },
            { text : "6", correct: true },
            { text : " 4", correct: false  },
        ],
    },
    {
        question: "How many seasons are there in the Hindu Calendar?",
        answers : [
            { text : "12", correct: false },
            { text : "9", correct: true },
            { text : "8", correct: false },
            { text : "13", correct: false  },
        ],
    },
]