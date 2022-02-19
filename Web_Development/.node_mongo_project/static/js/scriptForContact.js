// grabing clear
const clear = document.getElementById('clear');
// add click event to clear
clear.addEventListener('click', (e) => {
    // preventing default behaviour
    e.preventDefault();
    // grabing element and set their value to "".
    document.getElementById('nameInput').value = "";
    document.getElementById('emailInput').value = "";
    document.getElementById('phoneInput').value = "";
    document.getElementById('addressInput').value = "";
    document.getElementById('concernInput').value = "";
});