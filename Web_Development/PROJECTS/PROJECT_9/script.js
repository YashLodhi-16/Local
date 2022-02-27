// grabing all element inside tr and make an array.
let inputText = document.getElementsByClassName('inputText');
let inputArray = Array.from(inputText);
let input = document.getElementById('input');
// then using foreach loop for adding click event .
inputArray.forEach(element => {
    element.addEventListener('click', (targetedElement) => {
        let value = targetedElement.target.innerText;
        //when someone click if value equal to C it will clear's input tag value.
        if (value === 'C') { input.value = ""; }
        // if value equals to <- sign means remove last character's for input value.
        else if (value === '←') {
            let deleteLength = input.value.length - 1;
            input.value = input.value.slice(0, deleteLength);
        }
        // else someone click on the other button then it innertext will apend in input value.
        else { input.value += value; };
    });
});

// adding click event in btn for calcutions
let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    // creating these variable for future suvidha.
    let plus = input.value.includes('+');
    let minus = input.value.includes('-');
    let multiply = input.value.includes('*');
    let division = input.value.includes('/');
    let modules = input.value.includes('%');
    // if user does add one operator so this will execute
    if (plus || minus || multiply || division || modules) {
        showError('remove');
        // if user entry right property then calculated value will appear else throw error.
        try {
            let calculatedValue = eval(input.value);
            input.value = calculatedValue;
        } catch (error) { showError('add'); };
    } else { showError('add'); };
});

// function for showing error
function showError(remove) {
    let error = document.getElementById('error');
    if (remove === 'remove') { error.classList.add('none'); }
    else {
        error.classList.remove('none');
        setTimeout(() => {
            error.classList.add('none');
        }, 5000);
    };
};