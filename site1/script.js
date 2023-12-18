//Озвучка выделенного текста
function speak(text) {
    const message = new SpeechSynthesisUtterance();
    message.lang = "ru-RU";
    message.text = text;
    window.speechSynthesis.speak(message)
}



const quizData = [
    {
        question: "Сколько было губерний до восстания?",
        a: "30",
        b: "14",
        c: "20",
        correct: "c",
    },
    {
        question: "Сколько было погибших?",
        a: "примено 20 тыс.",
        b: "примено 5 тыс.",
        c: "примено 2 тыс.",
        correct: "a",
    },
    {
        question: "Достиг ли своих целей Пугачев?",
        a: "Нет",
        b: "Да",
        c: "кто такой Пугачев?",
        correct: "a",
    },
    {
        question: "Чем стала река Рик?",
        a: "Волгой",
        b: "Уралом",
        c: "Камазом",
        correct: "b",
    },
    {
        question: "Когда происходило восстание?",
        a: "1773 – 1775 гг.",
        b: "1765 – 1769 гг.",
        c: "1780 – 1783 гг.",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>You answered coreectly at ${score}/${quizData.length} questions</h2>
            <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});