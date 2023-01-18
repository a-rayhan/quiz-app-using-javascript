const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];

let index = 0;

let correct = 0,
    incorrect = 0,
    total = quizData.length;

const questionBox = document.getElementById('questionBox');
const optionInputs = document.querySelectorAll("input[type='radio']");

const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }

    reset();

    const data = quizData[index];
    questionBox.innerHTML = `${index + 1}) ${data.question}`;

    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

document.querySelector('#submit').addEventListener('click', function () {
    const data = quizData[index];
    const answer = getAnswer();

    if (answer === data.correct) {
        correct++;
    }
    else {
        incorrect++;
    }
    index++;
    loadQuestion();
})

const getAnswer = () => {
    let answer;
    optionInputs.forEach((inputElement) => {
        if (inputElement.checked) {
            answer = inputElement.value
        }
    })

    return answer;
}

const reset = () => {
    optionInputs.forEach((inputElement) => {
        inputElement.checked = false;
    })
}

const quizEnd = () => {
    document.getElementsByClassName('container')[0].innerHTML =
        `
    <div class="col">
        <h3>
           Hii, Thank you for paticipate. <br/>
           You've scored ${correct} / ${total}
        </h3>
    </div>
    `
}


loadQuestion();