const rotatorElements = document.querySelectorAll('.rotator__case');

function rotateAd() {
    const currentActiveElement = document.querySelector('.rotator__case_active');
    
    const currentIndex = Array.from(rotatorElements).indexOf(currentActiveElement);
    
    const nextIndex = (currentIndex + 1) % rotatorElements.length;
    
    currentActiveElement.classList.remove('rotator__case_active');
    
    rotatorElements[nextIndex].classList.add('rotator__case_active');
}

setInterval(rotateAd, 1000);
