console.log('yash lodhi');
var navbar = document.getElementById('navbar');
var resultcontainer = document.getElementById('resultcontainer');
resultcontainer.style.marginTop = navbar.style.height;
let hamburger = document.getElementById('hamburger');
// hamburger.onpointerdown = toggle;
hamburger.addEventListener('click',function toggle(e) {
    let quick = document.getElementById('quick');
    let formcontainer = document.getElementById('formcontainer');
    // hamburger.setPointerCapture(e.id);
    if (navbar.style.height === '36px') {
        navbar.style.height = '120px';
        formcontainer.style.marginTop = navbar.style.height;
        hamburger.style.top = '8%';
        quick.style.marginBottom = '2%';
    } else {
        formcontainer.style.marginTop = '2%';
        hamburger.style.top = '20%';
        navbar.style.height = '36px';
    }
});


//search function
let searchbar = document.getElementById('searchbar');
searchbar.addEventListener('input', function (e) {
    searchbarvalue = searchbar.value;
    let index = 0;
    let mama = document.getElementsByClassName('mama')
    Array.from(mama).forEach(function (efg) {
        let Nametd = document.getElementsByClassName('Nametd')[index];
        let Authortd = document.getElementsByClassName('Authortd')[index];
        let Typetd = document.getElementsByClassName('Typetd')[index];

        if (searchbarvalue === "" || searchbarvalue === " ") { efg.style.display = 'table-row'; }

        else if (Nametd.innerHTML.includes(searchbarvalue) || Authortd.innerHTML.includes(searchbarvalue) || Typetd.innerHTML.includes(searchbarvalue)) { efg.style.display = 'table-row'; }

        else { efg.style.display = 'none'; }

        index++
    });
});

// constructor
localStorageIndex = 0;
function engine(name, author, radio) {
    this._name = name;
    this._author = author;
    this._radio = radio;
    this._array = [this._name, this._author, this._radio];
}

// engine prototype to addbook's in localStorage
engine.prototype.addbook = function () {
    localStorage.setItem(localStorageIndex, JSON.stringify(this._array));
};

engine.prototype.status = function (statuscode) {
    this._statuscode = statuscode;
    let message1 = document.getElementById('message1');
    let message2 = document.getElementById('message2');
    let message3 = document.getElementById('message3');
    let message0 = document.getElementById('message0');
    let message;
    message1.style.display = 'none';
    message2.style.display = 'none';
    message3.style.display = 'none';
    message0.style.display = 'none';
    resultcontainer.classList.add('padx-2');
    if (this._statuscode === 'name') {
        message1.style.display = 'block';
        message = message1;
    }
    else if (this._statuscode === 'author') {
        message2.style.display = 'block';
        message = message2;
    }
    else if (this._statuscode === 'type') {
        message3.style.display = 'block';
        message = message3;
    } else {
        message0.style.display = 'block';
        message = message0;
    }
    setTimeout(() => {
        resultcontainer.classList.remove('padx-2')
        message.style.display = 'none';
    }, 5000);
}

// engine prototype to show book from localStorage
condition = 1;
engine.prototype.display = function () {
    const tablebody = document.getElementById('tablebody');
    if (condition === 1) {
        for (localStorageIndex = 0; localStorageIndex < localStorage.length; localStorageIndex++) {
            const element = JSON.parse(localStorage[localStorageIndex]);
            let template = ` <tr class="mama ${localStorageIndex}">
            <td class="table-cells Nametd">${element[0]}</td>
            <td class="table-cells Authortd">${element[1]}</td>
            <td class="table-cells Typetd">${element[2]}</td>
            <td class="table-cells">
            <button id="deletebtn-${localStorageIndex}" class="border2px b-radius deletebtn" onclick="deletefun(this.id)">Delete</button>
            </td>
        </tr> `;
            tablebody.innerHTML += template;
        }
        condition++;
    } else {
        let template = ` <tr class="mama ${localStorageIndex}">
        <td class="table-cells Nametd">${this._name}</td>
        <td class="table-cells Authortd">${this._author}</td>
        <td class="table-cells Typetd">${this._radio}</td>
        <td class="table-cells">
        <button id="deletebtn-${localStorageIndex}" class="border2px b-radius deletebtn" onclick="deletefun(this.id)">Delete</button>
        </td>
    </tr> `;
        tablebody.innerHTML += template;
        localStorageIndex++;
    }
}

//addnote function
let addbookbtn = document.getElementById('addbookbtn');
addbookbtn.addEventListener('click', function (e) {
    e.preventDefault();
    let author = document.getElementById('author').value;
    let name = document.getElementById('name').value;
    let radio;
    let fiction = document.getElementById('Fiction');
    let cooking = document.getElementById('Cooking');
    let programming = document.getElementById('Programming');
    if (fiction.checked) { radio = fiction; }
    else if (cooking.checked) { radio = cooking; }
    else if (programming.checked) { radio = programming; }
    let status;
    if (name === '' || name === " ") {
        status = 'name';
        engine.prototype.status(status);
    }
    else if (author === '' || author === " ") {
        status = 'author'
        engine.prototype.status(status);     
    }
    else if (radio === undefined || radio === null) {
        status = 'type'
        engine.prototype.status(status);
    }
    else {
        status = 'sucess'
        engine.prototype.status(status);
        let myengine = new engine(name, author, radio.id);
        myengine.addbook()
        myengine.display()
        document.getElementById('name').value = "";
        document.getElementById('author').value = "";
        radio.checked = false;
    };

});

let resetbtn = document.getElementById('resetbtn');
resetbtn.addEventListener('click', function () {
    localStorage.clear();
    location.reload();
})

engine.prototype.display();

function deletefun(params) {

    let paramsid = params.slice(10);

    localStorage.removeItem(paramsid);

    localitem = [];

    for (let i = 0; i <= localStorage.length; i++) {

        const element2 = localStorage[i];
        if (element2 != null || element2 != undefined) { localitem.push(element2); }

    }

    localStorage.clear()

    for (let k = 0; k < localitem.length; k++) {
        const element3 = localitem[k];
        localStorage.setItem(k, element3)
    }

    Array.from(document.getElementsByClassName('mama')).forEach((mama) => { mama.remove(); });

    condition = 1;
    engine.prototype.display()

}
