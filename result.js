// Sample data
const totalQuestions = 40;

// Display result
const resultContainer = document.getElementById('result');
resultContainer.innerHTML = `
    <button onclick="showAnswers()">Xem câu trả lời của bạn</button>
`;

// Display answers
const answersContainer = document.getElementById('answers');
for (let i = 1; i <= totalQuestions; i++) {
    const div = document.createElement('div');
    div.classList.add('answer');
    div.innerHTML = `
        <p class="question">Câu hỏi ${i}:</p>
        <p class="question">Câu trả lời của bạn: </p>
    `;
    answersContainer.appendChild(div);
}

function showAnswers() {
    answersContainer.style.display = 'block';
}

document.getElementById("backToWelcome").addEventListener("click", function() {
    window.location.href = "login.html";
});
  