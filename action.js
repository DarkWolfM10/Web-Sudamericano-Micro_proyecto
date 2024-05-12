// Objeto que almacena las preguntas y respuestas
const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        answers: ["Londres", "París", "Madrid", "Berlín"],
        correctAnswer: 1
    },
    {
        question: "¿Cuál es el río más largo del mundo?",
        answers: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
        correctAnswer: 1
    },
    // Agrega más preguntas aquí
];

// Función para mostrar una pregunta aleatoria en la página
function showQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const question = questions[randomIndex];
    
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    questionElement.textContent = question.question;
    
    // Limpiar las respuestas anteriores
    answersElement.innerHTML = "";
    
    // Agregar nuevas respuestas
    question.answers.forEach((answer, index) => {
        const li = document.createElement("li");
        li.textContent = answer;
        li.setAttribute("data-index", index);
        answersElement.appendChild(li);
    });
}

// Llamar a la función para mostrar la primera pregunta
showQuestion();
