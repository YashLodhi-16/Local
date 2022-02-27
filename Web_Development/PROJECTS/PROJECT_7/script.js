console.log('Yash Lodhi');

// initializing a array for profile with language's and framework's.
let newDataArray = [];

// this function will do a get request for cv 
async function getData() {
    const response = await fetch('https://randomuser.me/api/?results=5');
    const data = await response.json();
    return data;
};

// creating a variable for recieving server response from getData function
let serverResponse = getData();

// if the promise is fulfilled then this call addingProgrammingObject and nextCandidate function.
serverResponse.then(data => {
    value = data;
    addingProgrammingObject(value);
    nextCandidate();
});

// this function will add programming object to newDataArray
function addingProgrammingObject(serverResponseData) {
    const programming = [
        {
            language: 'Python',
            framework: 'Django'
        },
        {
            language: 'JavaScript',
            framework: 'Node JS'
        },
        {
            language: 'CSS',
            framework: 'TailWind'
        },
        {
            language: 'Html',
            framework: 'Bootstrap'
        },
        {
            language: 'C++',
            framework: 'Boost'
        },
    ];
    for (let newObjectIndex = 0; newObjectIndex < serverResponseData.results.length; newObjectIndex++) {
        const serverResponseDataElement = serverResponseData.results[newObjectIndex];
        const programmingElement = programming[newObjectIndex]
        newDataArray.push(Object.assign(serverResponseDataElement, programmingElement));
    };
};

// two variable for two if condition's
let forNextButton = 0;
let forPreviousButton = 0;

// index is for iterator indexing 
let index = 0;

// this function will return data using index
function iterator() {
    return {
        next: function (runner) {
            if (runner === true) {
                if (forNextButton === 1) {
                    index += 2;
                    forNextButton = 0;
                    if (!newDataArray[index]) {
                        index = 0;
                        python2 = 'Python';
                        if(languageLi.innerText.includes(python2)){ index++; }
                        else{ index = undefined; };
                    };
                };

                if (newDataArray[index]) {
                    return {
                        candidate: newDataArray[index++],
                        done: false
                    };
                } else {
                    index = 0;
                    return { done: true, };
                };
            } else {
                if (forPreviousButton === 1) {
                    index -= 2;
                    forPreviousButton = 0;
                    if (!newDataArray[index]) {
                        let python = 'Python'
                        if (!languageLi.innerText.includes(python)) { index = newDataArray.length - 2; };
                    };
                };

                if (newDataArray[index]) {
                    return {
                        candidate: newDataArray[index--],
                        done: false
                    };
                }
                else{
                    index = newDataArray.length - 1;
                    return { done: true, };
                };
            };
        },
    };
};

// creating a variable for iterating.
let iteratorValue = iterator();

// added click event on next btn
let next = document.getElementById('next');
next.addEventListener('click', nextCandidate);
function nextCandidate() {
    forPreviousButton = 1;
    let indexedValue = iteratorValue.next(true);
    grabingData(indexedValue, 'next');
};

// added click event on previous btn
let previous = document.getElementById('previous');
previous.addEventListener('click', previousCandidate);
function previousCandidate() {
    forNextButton = 1;
    let indexedValue = iteratorValue.next(false);
    grabingData(indexedValue, 'previous');
}

// collecting dom elements
let candidatePhotoImg = document.getElementById('candidatePhoto');
let nameLi = document.getElementById('name');
let ageLi = document.getElementById('age');
let cityLi = document.getElementById('city');
let languageLi = document.getElementById('language');
let frameworkLi = document.getElementById('framework');

// this function will grab data using params and show end of the list error using reslutType.
function grabingData(params, resultType) {
    start = document.getElementById('start');
    end = document.getElementById('end');
    if (params.done === false) {
        start.classList.remove('block');
        end.classList.remove('block');
        let candidatePhoto = params.candidate.picture.large;
        let age = params.candidate.dob.age;
        let city = params.candidate.location.city;
        let name = `${params.candidate.name.title} ${params.candidate.name.first} ${params.candidate.name.last}`;
        let language = params.candidate.language;
        let framework = params.candidate.framework;
        let profileArray = [candidatePhoto, name, age, city, language, framework];
        insertData(profileArray);
    } else if (resultType === 'next') {
        end.classList.remove('block');
        start.classList.add('block');
        setTimeout(() => {
            start.classList.remove('block')
        }, 5000);
    } else {
        start.classList.remove('block');
        end.classList.add('block');
        setTimeout(() => {
            end.classList.remove('block')
        }, 5000);
    }
};

// this function will insert the profile array element's in the dom.
function insertData(profile) {
     candidatePhotoImg.src = profile[0];
    nameLi.innerHTML = `Name: ${profile[1]}`;
    ageLi.innerHTML = `${profile[2]} years old`;
    cityLi.innerHTML = `Lives in ${profile[3]}`;
    languageLi.innerHTML = `Primarily works on ${profile[4]}`;
    frameworkLi.innerHTML = `Uses ${profile[5]} FrameWork`;
};