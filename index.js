const questions = [
    {
        question: "Among the following animals, which one is not a wild animal?",
        answers: [
            {text:"Lion", correct: false},
            {text:"Tiger", correct: false},
            {text:"Whale", correct: true},
            {text:"Wild-Beast", correct: false},
        ]

   },
   {
    question: "Which country does not belong to the east africa region ?",
        answers: [
            {text:"Tanzania", correct: false},
            {text:"Burundi", correct: true},
            {text:"Kenya", correct: false},
            {text:"Uganda", correct: false},
        ]
   }, 
   {
    question: "Among the colors below, which color is not included in the Kenyan flag?",
        answers: [
            {text:"White", correct: false},
            {text:"Red", correct: false},
            {text:"Green", correct: false},
            {text:"Yellow", correct: true},
        ]
   },
   {
    question: "Which of the following is not included on the mammal group of animals?",
        answers: [
            {text:"Tom", correct: false},
            {text:"Shark", correct: true},
            {text:"Hyena", correct: false},
            {text:"Whale", correct: false},
        ]
   },

   {
    question: "Which of the following is not a continent?",
        answers: [
            {text:"America", correct: false},
            {text:"Rwanda", correct: true},
            {text:"Antarctica", correct: false},
            {text:"Australia", correct: false},
        ]
   },

   {
    question: "Which of the following is not a source of water?",
        answers: [
            {text:"River", correct: false},
            {text:"Swimming pool", correct: true},
            {text:"Stream", correct: false},
            {text:"Lake", correct: false},
        ]
   },

   {
    question: "Which of the following is not a vegetable?",
        answers: [
            {text:"Spinach", correct: false},
            {text:"Apple", correct: true},
            {text:"Cabbage", correct: false},
            {text:"Broccoli", correct: false},
        ]
   },

   {
    question: "Which of the following is not a religion?",
        answers: [
            {text:"Islam", correct: false},
            {text:"Swahili", correct: true},
            {text:"Hinduism", correct: false},
            {text:"Christianity", correct: false},
        ]
   },

   {
    question: "Which of the following is not a source of energy?",
        answers: [
            {text:"Nuclear energy", correct: false},
            {text:"Solar", correct: false},
            {text:"Wind", correct: false},
            {text:"Bulb", correct: true},
        ]
   },

   {
    question: "Who Betrayed Jesus?",
        answers: [
            {text:"Simon", correct: false},
            {text:"Judas", correct: true},
            {text:"Peter", correct: false},
            {text:"James", correct: false},
        ]
   },
    

] ;
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answr-buttons");
const nextButton = document.getElementById("nxt-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuestion(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){

    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNO = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNO + " " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });

 }

 function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
 }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("wrong");
    }
    
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Completed quiz: Score ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Restart Quiz";
    nextButton.style.display = "block";

}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuestion();
    }
});


 startQuestion();


