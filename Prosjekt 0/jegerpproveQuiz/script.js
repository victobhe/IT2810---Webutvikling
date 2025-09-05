//spørsmål til quizen

const questions = [
    {
        question: "hvilke av disse er det ikke lov til å jakte på i Norge?",
        answer:[
            {text:"Bjørn", correct:false},
            {text:"Due", correct:false},
            {text:"Havørn", correct:true},
            {text:"Elg", correct:false}
        ]
    },
    {
        question: "hvilke av disse er det ikke lov til å jakte på i Norge?",
        answer:[
            {text:"Bjørn", correct:false},
            {text:"Due", correct:false},
            {text:"Havørn", correct:true},
            {text:"Elg", correct:false}
        ]
    },
    {
        question: "hvilke av disse er det ikke lov til å jakte på i Norge?",
        answer:[
            {text:"Bjørn", correct:false},
            {text:"Due", correct:false},
            {text:"Havørn", correct:true},
            {text:"Elg", correct:false}
        ]
    },
    {
        question: "hvilke av disse er det ikke lov til å jakte på i Norge?",
        answer:[
            {text:"Bjørn", correct:false},
            {text:"Due", correct:false},
            {text:"Havørn", correct:true},
            {text:"Elg", correct:false}
        ]
    }
]

const questionElement = document.getElementById("spm");
const answerButton = document.getElementById("spm");
const nextButton = document.getElementById("spm");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    })
}