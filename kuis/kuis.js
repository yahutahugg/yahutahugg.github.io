

const quizData = [
    {
        question: "Panjang alas suatu segitiga adalah 12 cm dan tingginya 5 cm. Luas segitiga itu adalah...cm²",
        a: "15",
        b: "30",
        c: "36",
        d: "24",
        correct: "b",
    },
    {
        question: "Luas sebuah segitiga 135 cm² dan panjang alasnya 18 cm. Berapakah cm tingginya?",
        a: "15",
        b: "18",
        c: "12",
        d: "7,5",
        correct: "a",
    },
    {
        question: "Keliling segitiga ABC sama kaki adalah 60 cm. Jika AC=BC=18 cm, maka panjang AB adalah...cm",
        a: "20",
        b: "22",
        c: "23",
        d: "24",
        correct: "d",
    },
    {
        question: "Pernyataan besaran yang tepat: \n 1. Massa = Turunan\n 2. Gaya = Pokok\n 3. Waktu = Pokok",
        a: "1",
        b: "2",
        c: "3",
        d: "Semua salah",
        correct: "c",
    },
    {
        question: "Kelompok besaran turunan adalah...",
        a: "Massa, panjang, waktu dan kuat arus",
        b: "Intensitas cahaya, jumlah zat, gaya, energi",
        c: "Suhu, kuat arus, tekanan, volume",
        d: "Momentum, kalor jenis, beda potensial dan daya",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})

// menu
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");

menuIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.remove("active");
});
