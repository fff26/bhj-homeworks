document.addEventListener("DOMContentLoaded", function () {
    let clickerCounter = document.getElementById('clicker__counter');
    let cookieImage = document.getElementById('cookie');

    let clickCount = 0;
    function handleClick() {
        clickCount++;
        clickerCounter.textContent = clickCount;

        if (clickCount % 2 === 0) {
            cookieImage.style.width = '150px';
            cookieImage.style.height = '150px';
        } else {
            cookieImage.style.width = '200px';
            cookieImage.style.height = '200px';
        }
    }
    cookieImage.addEventListener('click', handleClick);
});
