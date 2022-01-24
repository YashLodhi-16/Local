console.log('yash lodhi');
let minutesSelection = document.getElementById('minutesSelection');
let hoursSelection = document.getElementById('hoursSelection');
let secondsSelection = document.getElementById('secondsSelection');

function optionsSetter() {
    let zeroAdder = 0;
    let hours = 0;
    for (let minutes = 0; minutes < 60; minutes++) {
        if (minutes < 10) {
            var minuteOptions = `<option>${zeroAdder}${minutes}</option>`;
            var seconds = `<option>${zeroAdder}${minutes}</option>`;
        } else {
            var minuteOptions = `<option>${minutes}</option>`;
            var seconds = `<option>${minutes}</option>`;
        }
        minutesSelection.innerHTML += minuteOptions;
        secondsSelection.innerHTML += minuteOptions;
        if (hours < 24) {
            if (hours < 10) {
                var hoursOptions = `<option>${zeroAdder}${hours}</option>`;
            }
            else {
                var hoursOptions = `<option>${hours}</option>`;
            }
            hours++;
            hoursSelection.innerHTML += hoursOptions;
        }
    }
}
forNewAlarm = undefined;
function setAlarm() {
    let secondsSelectionValue = Number(secondsSelection.value);
    let minutesSelectionValue = Number(minutesSelection.value);
    let hoursSelectionValue = Number(hoursSelection.value);
    let valueChangerNumber = 00;
    valueChangerString = '00';
    let successMessage = document.getElementById('successMessage');
    let errorMessage = document.getElementById('errorMessage');
    let block = 'block';
    let none = 'none';;
    if (secondsSelectionValue != valueChangerNumber || minutesSelectionValue != valueChangerNumber || hoursSelectionValue != valueChangerNumber) {
        let alarmContainer = document.getElementById('alarmContainer');
        alarmContainer.style.display = block;
        errorMessage.style.display = none;
        successMessage.style.display = block;
        setTimeout(() => {
            successMessage.style.display = none;
        }, 5000);
        let alarmTime = document.getElementById('alarmTime');
        let converter = 59;
        if (forNewAlarm === true) {
            clearInterval(timer);
            forNewAlarm = false;
            setAlarm();
        } else {
            timer = setInterval(() => {
                alarmTime.innerHTML = `${hoursSelectionValue}:${minutesSelectionValue}:${secondsSelectionValue}`;
                if (secondsSelectionValue === valueChangerNumber) {
                    if (minutesSelectionValue === valueChangerNumber) {
                        if (hoursSelectionValue === valueChangerNumber) {
                            let audio = new Audio('https://s3.amazonaws.com/deeappservice.prod.notificationtones/system_alerts_melodic_06.mp3');
                            let timeDone = document.getElementById('timeDone');
                            let timeDoneMessage = 'Time Done';
                            timeDone.innerHTML = timeDoneMessage;
                            alarmTime.innerHTML = '';
                            audio.play();
                            clearInterval(timer);
                        } else {
                            hoursSelectionValue--;
                            minutesSelectionValue = converter;
                            secondsSelectionValue = converter;
                        }
                    } else {
                        minutesSelectionValue--;
                        secondsSelectionValue = converter;
                    }
                } else {
                    secondsSelectionValue--;
                }
            }, 1000);
            secondsSelection.value = valueChangerString;
            minutesSelection.value = valueChangerString;
            hoursSelection.value = valueChangerString;
            forNewAlarm = true;
        }
    }
    else {
        successMessage.style.display = none;
        errorMessage.style.display = block;
        setTimeout(() => {
            errorMessage.style.display = none;
        }, 5000);
    };
};
optionsSetter();