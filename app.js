const quizDB = [

{
    question: "Q1: How many states in the United State?",
    a:"40",
    b:"45",
    c:"50",
    d:"55",

    ans:"ans3"

},


{
    question: "Q2: 'One People , One State , One Leader' was the policy of?",
    a:"Statin",
    b:"Hitler",
    c:"Lenin",
    d:"Wiki",

    ans:"ans2"

},


{
    question: "Q3: 'DRDL' stands for?",
    a:"Defence Research and Development Laboritory",
    b:"Department Research and Development Laboritory",
    c:"Differential Research and Documentation Laboritory",
    d:"None Of The Above",

    ans:"ans1"

},


{
    question: "Q4: Expsure to Sunlight helps a person improve his health because?",
    a:"the infrared tight kills bacteris in the body",
    b:"resistance power increases",
    c:"the pigment cells in the skin get stimulated and produce a healty tan",
    d:"the ultraviolet rays convert skin oil init Vitamin D",

    ans:"ans4"

},


{
    question: "Q5: An Astronout in outer space will observe sky as?",
    a:"White",
    b:"Black",
    c:"Blue",
    d:"Red",

    ans:"ans2"

},


{
    question: "Q6: Bats can fly in the Dark Sky because of?",
    a:"they have a better vision in the dark",
    b:"the light startles in them",
    c:"the produce high pitched sounds called ultrasonics",
    d:"none of the above",

    ans:"ans3"

},


{
    question: "Q7: Which is the considered as the biggest port of India?",
    a:"Kalkota",
    b:"Cochin",
    c:"Chennai",
    d:"Mumbai",

    ans:"ans4"

},


{
    question: "Q8: The most important small scale industry in India is the?",
    a:"Textile Industry",
    b:"Paper Industry",
    c:"Handloom Industry",
    d:"Jute Industry",

    ans:"ans3"

},


{
    question: "Q9: Which is green planet in the solar system?",
    a:"Pluto",
    b:"Venus",
    c:"Urans",
    d:"Mars",

    ans:"ans3"

},


{
    question: "Q10: Name the continent where 'Tundra' type of climate is not found?",
    a:"Europe",
    b:"Asia",
    c:"Africa",
    d:"North America",

    ans:"ans3"

},

];


const question = document.querySelector('.question');

const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');


const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const ShowScore = document.querySelector('#ShowScore');

let questionCount = 0;

let score = 0;

const loadQuestion = () => {

const questionList = quizDB[questionCount];

question.innerText = questionList.question;

option1.innerText = questionList.a;
option2.innerText = questionList.b;
option3.innerText = questionList.c;
option4.innerText = questionList.d;

}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

answers.forEach((curAnsElem) => {

if(curAnsElem.checked){
    answer = curAnsElem.id;
}

});


return answer;

}

submit.addEventListener('click' , () => {

    const checkedAnswer = getCheckAnswer (); 

    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        
        score++;

    }
  
questionCount++;

if(questionCount < quizDB.length){

    loadQuestion();
} else{

ShowScore.innerHTML = `

<h3> YOUR SCORE ${score}/${quizDB.length} * </h3>
<button class="btn" onclick="location.reload()">PLAY AGAIN</button>
`;

ShowScore.classList.remove('ScoreArea');


}






});












