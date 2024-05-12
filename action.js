function enviarMensaje() {            
    var mensajeUsuario = document.getElementById("mensaje").value;            
    var chatHistory = document.getElementById("chat-history");            
    var chatBubbleUser = document.createElement("div");            
    chatBubbleUser.innerHTML = "<strong>Tú:</strong> " + mensajeUsuario;            
    chatHistory.appendChild(chatBubbleUser);             
    fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {                
        method: 'POST',                
        headers: {                    
            'Content-Type': 'application/json',                    
            'Authorization': '' // Aquí falta la API aún...                
        },                
        body: JSON.stringify({                    
            prompt: mensajeUsuario,                    
            max_tokens: 150                
        })            
    })            
    .then(response => response.json())            
    .then(data => {                
        var respuestaChatGPT = data.choices[0].text.trim();                
        var chatBubbleGPT = document.createElement("div");                
        chatBubbleGPT.innerHTML = "<strong>ChatGPT:</strong> " + respuestaChatGPT;                
        chatHistory.appendChild(chatBubbleGPT);                
        chatHistory.scrollTop = chatHistory.scrollHeight;            
    })            
    .catch(error => {                
        console.error('Error:', error);            
    });
    document.getElementById("mensaje").value = "";        
}

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
