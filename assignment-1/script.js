// Your JS code goes here
const addBookDialogDOM = document.querySelector('#add-book-dialog');
const addBookBtnDOM = document.querySelector('#add-book-btn');
const closeAddBookDialogIconDOM = document.querySelector('#close-add-book-dialog');

addBookBtnDOM.addEventListener('click', () => {
    addBookDialogDOM.style.display = 'flex';
})

closeAddBookDialogIconDOM.addEventListener('click', () => {
    addBookDialogDOM.style.display = 'none';
})