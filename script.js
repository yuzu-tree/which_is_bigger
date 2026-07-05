let currentIdx = 0;
let score = 0;

function renderMath() {
    // MathJaxに数式を再レンダリングさせる
    if (window.MathJax) {
        MathJax.typesetPromise();
    }
}

function loadQuestion() {
    const q = quizData[currentIdx];
    document.getElementById('btn-left').innerHTML = q.left;
    document.getElementById('btn-right').innerHTML = q.right;
    
    document.getElementById('hint-text').classList.add('hidden');
    document.getElementById('result-area').classList.add('hidden');
    document.getElementById('btn-left').disabled = false;
    document.getElementById('btn-right').disabled = false;
    
    renderMath();
}

function checkAnswer(choice) {
    const q = quizData[currentIdx];
    document.getElementById('btn-left').disabled = true;
    document.getElementById('btn-right').disabled = true;
    
    const isCorrect = (choice === q.answer);
    if (isCorrect) score++;

    document.getElementById('result-feedback').innerText = isCorrect ? "正解！" : "不正解...";
    document.getElementById('explanation-text').innerHTML = q.explanation;
    document.getElementById('result-area').classList.remove('hidden');
    
    renderMath();
}

document.getElementById('btn-left').onclick = () => checkAnswer('left');
document.getElementById('btn-right').onclick = () => checkAnswer('right');
document.getElementById('btn-hint').onclick = () => {
    document.getElementById('hint-text').innerHTML = quizData[currentIdx].hint;
    document.getElementById('hint-text').classList.toggle('hidden');
    renderMath();
};

document.getElementById('btn-next').onclick = () => {
    currentIdx++;
    if (currentIdx < quizData.length) {
        loadQuestion();
    } else {
        document.getElementById('quiz-area').classList.add('hidden');
        document.getElementById('final-result').classList.remove('hidden');
        document.getElementById('score-text').innerText = `${score} / ${quizData.length} 正解`;
    }
};

loadQuestion();