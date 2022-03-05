// to store all music
const music = [];

// grab dom elements
const hoursSelection = document.getElementById('hoursSelection');
const secondsSelection = document.getElementById('secondsSelection');
const minutesSelection = document.getElementById('minutesSelection');
const musicSelection = document.getElementById('musicSelection');

// call functions
setBackground(1);
getMusic();
setSelectionFields();

// use index to get a particular file.
// to set background image on body 
function setBackground(index) {
    // grab body tag style
    const setBackgroundImage = document.body.style;
    // set url to image inside img folder
    const src = `url(../img/image-${index}.jpg)`;
    // set background image by using src variable
    setBackgroundImage.backgroundImage = src;
};

// to collect music's
async function getMusic() {
    // to collect by using i to iterate by indexing and push all music variable to music array 
    const musicName = [
        "The Cradle of Your Soul",
        "Spirit Blossom",
        "Morning Garden - Acoustic Chill",
        "Both of Us",
        "Moment",
    ];
    for (let i = 0; i < 5; i++) {
        // grab music by using i
        const collectedMusic = await new Audio(`../music/music-${i}.mp3`);
        // grab music name by using i
        const setMusicName = musicName[i];
        // set musicObj 
        const musicObj = {
            name: setMusicName,
            music: collectedMusic,
            background: () => setBackground(i)
        }
        // push to musicObj in music array
        music.push(musicObj);
    };
};

// to fill all selection fields 
async function setSelectionFields() {
    for (let j = 0; j < 60; j++) {
        // create a option tag
        const option = await document.createElement('option');
        // set option text content to j
        if (j < 10) option.textContent = "0" + j;
        else option.textContent = j;
        // set secondsSelection and minutesSelection inner html to option outer html
        secondsSelection.innerHTML += option.outerHTML;
        minutesSelection.innerHTML += option.outerHTML;
        // if j is less than 24 than it will set hoursSelection inner html to option outer html
        if (j < 24) hoursSelection.innerHTML += option.outerHTML;
        // if j is less than music length than this will fire
        if (j < music.length) {
            // it will set option text content to music(element iterate by j) name
            option.textContent = music[j].name;
            // set musicSelection innerhtml to option outer html
            musicSelection.innerHTML += option.outerHTML;
        };
    };
};

// to play or pause bgm 
let validater;

// to get and start music according to the user
function getAndStartMusic() {
    // collect musicsSelection value
    const musicSelectionValue = musicSelection.value;
    // to iterate music array
    for (k = 0; k < music.length; k++) {
        // grab music array element by k
        const element = music[k];
        // if musicSelectionValue equals to element name then this will fire
        if (musicSelectionValue === element.name) {
            // set validater to element music
            validater = element;
            // set background image
            validater.background();
            // play validater
            validater.music.play();
        };
    };
};

// to play music when music is over
const playMusicAgain = () => { if (validater.ended === true) validater.music.play(); };

// set time selection's value to 00
function resetSelectionValue() {
    hoursSelection.value = "00";
    secondsSelection.value = "00";
    minutesSelection.value = "00";
};

// grab removeTimerButton from dom
const removeTimerButton = document.getElementById('removeTimerButton');
// add click event to it.
removeTimerButton.addEventListener('click', () => {
    removeTimer();
    resetSelectionValue();
});
// to remove Timer
function removeTimer() {
    // grab remainedTime 
    const remainedTime = document.getElementById('remainedTime');
    // if interval is not undefined then it will run clearInterval function to clear interval
    if (interval != undefined) clearInterval(interval);
    // if remainedTime is not undefined then it will remove remainedTime
    if (remainedTime != undefined) remainedTime.remove();
    // if validater is not undefined then it will pause validater
    if (validater != undefined) validater.music.pause();
};

// to hold set interval
let interval;

// grab setTimerButton by its id.
const setTimerButton = document.getElementById('setTimerButton');
// add click event to it.
setTimerButton.addEventListener('click', () => {
    // call removeTimer function
    removeTimer();
    // call getAndStartMusic function
    getAndStartMusic();
    // call changeTime function
    changeTime();
    // call resetSelectionValue function
    resetSelectionValue();
});

// to change time
function changeTime() {
    // grab remainedTimerContainer from dom
    const remainedTimerContainer = document.getElementById('remainedTimerContainer');
    // collect time selection's value
    let hoursSelectionValue = Number(hoursSelection.value);
    let minutesSelectionValue = Number(minutesSelection.value);
    let secondsSelectionValue = Number(secondsSelection.value);
    // set interval value to setInterval
    interval = setInterval(() => {
        // call playMusicAgain function
        playMusicAgain();
        // create a time string using time selection value
        let time = `<span id="remainedTime">${hoursSelectionValue}:${minutesSelectionValue}:${secondsSelectionValue}</span>`;
        // remainedTimerContainer inner html to time 
        remainedTimerContainer.innerHTML = time;
        // for time change conditional statement
        const valueChangerNumber = 00;
        // to converte time selection value
        const converter = 59;
        // if secondsSelectionValue equals to valueChangerNumber
        if (secondsSelectionValue === valueChangerNumber) {
            // if minutesSelectionValue equals to valueChangerNumber
            if (minutesSelectionValue === valueChangerNumber) {
                // if hoursSelectionValue equals to valueChangerNumber
                if (hoursSelectionValue === valueChangerNumber) {
                    // call removeTimer function
                    removeTimer();
                    // call resetSelectionValue function
                    resetSelectionValue();
                } else {
                    // decrementing hoursSelectionValue by 1
                    hoursSelectionValue--;
                    // set minutesSelectionValue and secondsSelectionValue to converter
                    minutesSelectionValue = converter;
                    secondsSelectionValue = converter;
                }
            } else {
                //  decrementing minutesSlectionValue by 1
                minutesSelectionValue--;
                // set secondsSelectionValue to converter
                secondsSelectionValue = converter;
            }
        } else {
            //  decrementing secondsSlectionValue by 1
            secondsSelectionValue--;
        }
        // set interval time to 1000 milli seconds
    }, 1000);
};