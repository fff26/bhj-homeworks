const fontSizeControls = document.querySelectorAll('.font-size');

const bookElement = document.getElementById('book');

function changeFontSize(event) {
    event.preventDefault();
    
    fontSizeControls.forEach(control => {
        control.classList.remove('font-size_active');
    });
    
    event.target.classList.add('font-size_active');
    
    const fontSize = event.target.getAttribute('data-size');
    
    bookElement.classList.remove('book_fs-big', 'book_fs-small');
    
    if (fontSize === 'big') {
        bookElement.classList.add('book_fs-big');
    } else if (fontSize === 'small') {
        bookElement.classList.add('book_fs-small');
    }
}

fontSizeControls.forEach(control => {
    control.addEventListener('click', changeFontSize);
});
