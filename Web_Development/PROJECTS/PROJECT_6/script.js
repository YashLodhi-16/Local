let name = document.getElementById('name');
let number = document.getElementById('number');
let email = document.getElementById('email');
let address = document.getElementById('address');
let message = document.getElementById('message');
let select = document.getElementById('select');
let elementForReset = [name, email, select, address, number, message];
let nameValue = name.value;
let emailValue = email.value;
let numberValue = number.value;
let selectValue = select.value;
let addressValue = address.value;
let messageValue = message.value;
let nameValidater = undefined;
let emailValidater = undefined;
let numberValidater = undefined;
let valueArray = [nameValue, emailValue, selectValue, addressValue, numberValue, messageValue];
function error(errorName, toggleOutline) {
    this._errorName = errorName;
    this._toggleOutline = toggleOutline;
    this._errorContainer = document.getElementById(`${this._errorName}ErrorContainer`);
    this._errorContainer.style.display = window.getComputedStyle(this._errorContainer).display;
}

error.prototype.showError = function () {
    this._errorContainer.style.display = 'block';
    this._toggleOutline.classList.add('outline-red');
}

error.prototype.hideError = function () {
    this._errorContainer.style.display = 'none';
    this._toggleOutline.classList.remove('outline-red');
}


name.addEventListener('input', () => {
    let nameRegex = /\w{2,20}/;
    nameValue = name.value;
    let myname = new error('name', name);
    if (nameRegex.test(nameValue)) {
        nameValidater = true;
        myname.hideError();
    }
    else {
        nameValidater = false;
        myname.showError();
    }
});


email.addEventListener('input', () => {
    let emailRegex = /\D\w{0,20}@\D\w{0,20}\.\w{1,20}/g;
    emailValue = email.value;
    let myemail = new error('email', email);
    if (emailRegex.test(emailValue)) {
        emailValidater = true;
        myemail.hideError();
    }
    else {
        emailValidater = false;
        myemail.showError();
    }
});


number.addEventListener('input', () => {
    let numberRegex = /^\d{10}/;
    numberValue = number.value;
    let mynumber = new error('number', number);
    if (numberValue.length === 10) {
        if (numberRegex.test(numberValue)) {
            numberValidater = true;
            mynumber.hideError();
        }
        else {
            numberValidater = false;
            mynumber.showError();
        };
    }
    else {
        numberValidater = false;
        mynumber.showError();
    };
});

function sumbitForm() {
    let sumbitSucess = document.getElementById('sumbitSucess');
    let sumbitFailure = document.getElementById('sumbitFailure');
    selectValue = select.value;
    addressValue = address.value;
    messageValue = message.value;
    if (nameValidater && numberValidater && emailValidater && messageValue && addressValue && selectValue) {
        for (let index = 0; index < elementForReset.length; index++) {
            valueArray[index] = elementForReset[index].value;
            document.getElementById(elementForReset[index].id).value = "";
        }
        sumbitPost(valueArray);
        sumbitSucess.classList.add('block');
        setTimeout(() => {
            sumbitSucess.classList.remove('block');
        }, 5000);
    } else {
        sumbitFailure.classList.add('block');
        setTimeout(() => {
            sumbitFailure.classList.remove('block');
        }, 5000);
    };
};

async function sumbitPost(array) {
    let data = {
        name: array[0],
        email: array[1],
        select: array[2],
        address: array[3],
        number: array[4],
        message: array[5],
    };
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const response = await fetch('https://reqres.in/api/users', options);
    const users = await response.json();
};

function toCheckReload() {
    if (valueArray[0]) {
        if (valueArray[0].length >= 2) {
            nameValidater = true;
        } else {
            nameValidater = false;
        }
    }
    if (valueArray[1]) {
        let emailRegex = /\D\w{0,20}@\D\w{0,20}\.\w{1,20}/g;
        if (emailRegex.test(valueArray[1])) {
            emailValidater = true;
        } else {
            emailValidater = false;
        }
    }
    if (valueArray[4]) {
        if (valueArray[4].length === 10) {
            numberValidater = true;
        } else {
            numberValidater = false;
        }
    }
};
toCheckReload();