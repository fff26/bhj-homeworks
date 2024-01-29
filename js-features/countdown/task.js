document.addEventListener("DOMContentLoaded", function () {
    let timerElement = document.getElementById('timer');
    let timerValue = parseInt(timerElement.textContent);

    var timerInterval = setInterval(function() {
        timerValue--;
        timerElement.textContent = timerValue;

        if (timerValue <= 0) {
            clearInterval(timerInterval);
            alert('Вы победили в конкурсе!');
        }
    }, 1000);
});
