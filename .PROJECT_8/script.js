console.log('yash lodhi');
let navbar = document.getElementById('navbar');
let hamburgerbox = document.getElementById('hamburgerbox');
hamburgerbox.addEventListener('click', function () {
    let newHeightValue = "119px";
    let oldHeightValue = '22px';
    let contentbox = document.getElementById('contentbox');
    if (navbar.style.height == oldHeightValue) {
        navbar.style.height = newHeightValue;
        let navbarOffsetHeight = `${navbar.offsetHeight + 10}px`
        contentbox.style.marginTop = navbarOffsetHeight;
    }
    else {
        navbar.style.height = oldHeightValue;
        contentbox.style.marginTop = '55px';
    };
});

// grabing radio button's
let contentTypeRadioJsonInput = document.getElementById('contentTypeRadioJsonInput');
let contentTypeRadioCustomInput = document.getElementById('contentTypeRadioCustomInput');

// grabing data container's
let requestDataJsonContainer = document.getElementById('requestDataJsonContainer');
let requestDataCustomContainer = document.getElementById('requestDataCustomContainer');

// adding click event to radio button's
contentTypeRadioJsonInput.addEventListener('click', jsonInputContainerShowing);
contentTypeRadioCustomInput.addEventListener('click', contentInputContainerShowing);

// function for showing json container
function jsonInputContainerShowing() {
    requestDataJsonContainer.classList.remove('none');
    requestDataJsonContainer.classList.add('flex');
    requestDataCustomContainer.classList.add('none');
};

// function for showing custom parameter container
function contentInputContainerShowing() {
    requestDataCustomContainer.classList.remove('none');
    requestDataCustomContainer.classList.add('flex');
    requestDataJsonContainer.classList.add('none');
};

// function for appending custom input container 
let index = 2;
function customInputContainerAdder() {
    let mainResquestDataContainer = document.getElementById('mainResquestDataContainer');
    let div = document.createElement('div');
    div.setAttribute('class','requestDataCustomInputContainer align ml-auto flex my-2');
    div.setAttribute('id',`requestDataCustomInputContainer-${index}`);
    
    let newCustomInputContainer = `
    <div class="requestDataCustomInputKeyContainer inline-flex" id="requestDataCustomInputKeyContainer-${index}">
        <div class="requestDataKeyInputContainer" id="requestDataKeyInputContainer-${index}">
            <input id="requestDataKeyInput-${index}" class="requestDataKeyInput padx-2 pady-2 border2px b-radius outline-none" type="text" placeholder="Enter Parameter ${index} Key">
        </div>
    </div>

    <div class="requestDataCustomInputValueContainer inline-flex mx-2" id="requestDataCustomInputValueContainer-${index}">
        <div class="requestDataValueInputContainer" id="requestDataValueInputContainer-${index}">
            <input id="requestDataValueInput-${index}" class="requestDataValueInput padx-2 pady-2 border2px b-radius outline-none"type="text" placeholder="Enter Parameter ${index} Value">
        </div>
    </div>

    <div class="requestDataCustomInputAdderContainer" id="requestDataCustomInputAdderContainer-${index}">
        <button class="requestDataCustomInputAdderBtn pady-2 padx-2 border2px b-radius pointer" id="requestDataCustomInputAdderBtn-${index}" onclick="removeCustomInputContainer(this.parentElement.parentElement)">-</button>
    </div>`;
    div.innerHTML = newCustomInputContainer;
    mainResquestDataContainer.append(div);
    index += 1;
};

// function for get or post request
function sumbit() {
    let requestType = 'requestTypeRadioInput';
    let checkedRequestType = grabingCheckedRequestType(requestType);
    let url = document.getElementById('url').value;
    let remove = 'remove';
    if(!url){ showError(); } // checking url is empty or not.
    else{
        showError(remove);
        if(!checkedRequestType){ showError(); } // checking request type radio button is empty or not.
        else{
            showError(remove);
            // checking if this a get or post request.
            if(checkedRequestType.id.includes('Get')){ request('GET',url); } // sending request.
            else{
                let contentType = 'contentTypeRadioInput';
                let checkedContentType = grabingCheckedRequestType(contentType);
                if(!checkedContentType){ showError(); } // checking content type radio button is empty or not.
                else{
                    showError(remove);
                    // checking for if this a json or custom parameter input.
                    if(checkedContentType.id.includes('Json')){ 
                        let jsonData = collectJson();
                        if (!jsonData) { showError(); } // checking json textarea is empty or not.
                        else{
                            showError(remove);
                            request('POST',url,jsonData); // sending request.
                            clearJsonInput();
                        };
                     }
                    else{ 
                        let customData = collectCustomParameter();
                        if (!customData) { showError(); } // checking custom parameter input's is empty or not.
                        else{
                            console.log('yashlodhi');
                            showError(remove);
                            request('POST',url,customData); // sending request.
                            clearCustomInput();
                        };
                     };
                };
            };
        };
    };
};

// function for get request 
let responseText = document.getElementById('responseText');
function request(requestType,url,postData) {
    if(requestType === 'GET'){
        fetchData = fetch(url);
    }
    else{
        let options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: postData,
        };
        fetchData = fetch(url,options);
    }
    responseText.innerHTML = "Please Wait...."
    fetchData.then(data => data.json())
    .then(response => responseText.innerHTML = JSON.stringify(response, undefined, 4))
    .catch(error => console.error(error));
    responseContainer.classList.add('overflow-y-scroll');
};

// ****************utility function's******************

// function for clearing json input value
function clearJsonInput(){
    let requestDataJsonInput = document.getElementById('requestDataJsonInput'); 
    requestDataJsonInput.value = "";
}

// function for clearing custom parameter input value and other container
function clearCustomInput(){
    let removingElement = document.getElementsByClassName('requestDataCustomInputContainer');
    let removingIndex = removingElement.length-1;
    for(let remover = removingIndex;remover>0;remover--){
        removingElement[remover].remove();
    };
    let requestDataKeyInput = document.getElementById('requestDataKeyInput-1');
    let requestDataValueInput = document.getElementById('requestDataValueInput-1');
    requestDataKeyInput.value = "";
    requestDataValueInput.value = "";
};

// function for copy data in clipboard
function copyData(){
    let copiedData = responseText.innerText;
    navigator.clipboard.writeText(copiedData)
};

// function for showing error 
function showError(goRight) {
    let error = document.getElementById('error');
    let none = 'none';
    if (goRight === 'remove') {
        error.classList.add(none);
    } else {
        let timeoutLengthMS = 5000;
        error.classList.remove(none);
        let removeError = setTimeout(() => {
            error.classList.add(none)
        }, timeoutLengthMS);
    };
};

// function for returning value using radio button's
function returningValue(radioType) {
    let json = 'contentTypeRadioJsonInput';
    let custom = 'contentTypeRadioCustomInput';
    if (radioType === json) {
        let json = collectJson();
        return json;
    }
    else if (radioType === custom) {
        let custom = collectCustomParameter();
        return custom;
    }
    else {
        return false;
    }
};

// function to check that which requestTypeRadio is selected 
function showContainers() {
    if (contentTypeRadioJsonInput.checked) { jsonInputContainerShowing(); }
    else if (contentTypeRadioCustomInput.checked) { contentInputContainerShowing(); };
}; showContainers(); // calling it 

// function for grabing checked input
function grabingCheckedRequestType(name) {
    let requestTypeAllElements = document.getElementsByName(name);
    let checkedElement = undefined;
    if (requestTypeAllElements[0].checked) {
        return checkedElement = requestTypeAllElements[0];
    } else if (requestTypeAllElements[1].checked) {
        return checkedElement = requestTypeAllElements[1];
    } else {
        return false;
    };
};

// function for collecting json
function collectJson() {
    let requestDataJsonInput = document.getElementById('requestDataJsonInput').value;
    if (requestDataJsonInput === "" || requestDataJsonInput === " ") {
        return false;
    } else {
        // let strRequestDataJsonInput = JSON.stringify(requestDataJsonInput);
        return requestDataJsonInput;
    }
};

// function for collecting custom parameter
function collectCustomParameter() {
    let iterationLength = document.getElementsByClassName('requestDataCustomInputContainer').length;
    let obj = {};
    for (i = 0; i < iterationLength; i++) {
        let requestDataKeyInput = document.getElementsByClassName('requestDataKeyInput')[i].value;
        let requestDataValueInput = document.getElementsByClassName('requestDataValueInput')[i].value;
        obj[requestDataKeyInput] = requestDataValueInput;
    };
    let stringfiedObj = JSON.stringify(obj);
    return stringfiedObj;
};

// function for removing customInputContainer
function removeCustomInputContainer(params) { params.remove(); };