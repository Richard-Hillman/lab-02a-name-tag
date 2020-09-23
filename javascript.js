const theInput = document.getElementById('argue');
const theResult = document.getElementById('made');
const myButton = document.getElementById('button');

myButton.addEventListener('click', () => {
    const value = theInput.value;
    
    theResult.textContent = value;
    
    theInput.value = '';

});