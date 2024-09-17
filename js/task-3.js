const nameInput = document.querySelector('input#name-input');
const nameOutput = document.querySelector('span#name-output');

nameInput.addEventListener('input', (event) => {
    const inputValue = event.target.value.trim();
    nameOutput.textContent = inputValue === '' ? 'Anonymous' : inputValue;
});


