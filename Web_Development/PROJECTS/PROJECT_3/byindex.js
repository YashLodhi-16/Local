fornonote();

tochecklocalstorage();

//responsive navbar
document.getElementById('hamburgerbtn').addEventListener('click', () => {

    let navbar = document.getElementById('navbar');

    let welcome = document.getElementById('welcome');

    if (navbar.style.height == '44px') {

        navbar.style.height = 'auto';

        welcome.style.marginTop = "12em";
    } else {

        navbar.style.height = '44px';

        welcome.style.marginTop = "4em";

    };

});

// search function
document.getElementById('inputbx').addEventListener('input', (e) => {

    allclasses = document.getElementsByClassName('card');

    indexfortraversal = 0;

    Array.from(allclasses).forEach((efg) => {

        inputtxt = document.getElementById('inputbx').value;

        allclasses = document.getElementsByClassName('card')[indexfortraversal].children[2].innerText;

        allclasses2 = document.getElementsByClassName('card')[indexfortraversal].children[0].innerText;

        if (allclasses.includes(inputtxt) || allclasses2.includes(inputtxt)) {

            efg.style.display = 'inline-block';

        } else if (inputtxt === '') {

            efg.style.display = 'inline-block';

        } else {

            efg.style.display = 'none';

        };

        indexfortraversal++;

    });

});

// addnote by index 
document.getElementById('addnotebtn').addEventListener('click', () => {

    textarea = document.getElementById('textarea').value;

    inputtitle = document.getElementById('inputtitle').value;

    myarr = [];

    myarr.push(inputtitle, textarea)

    strarr = JSON.stringify(myarr);

    if (textarea === "" || inputtitle === "") {

        errorcontainer = document.getElementById('errorcontainer');

        errorcontainer.style.display = 'block';

    } else {

        errorcontainer.style.display = 'none';

        localStorage.setItem(mamba, strarr)

        document.getElementById('inputtitle').value = "";

        document.getElementById('textarea').value = ""; 

    };

});

// to delete all note
document.getElementById('resetdata').addEventListener('click', () => {

    localStorage.clear();

    location.reload();

});

//tocheckoldernotes by index
function tochecklocalstorage() {

    if (localStorage.length != 0) {

        for (mamba = 0; mamba < localStorage.length; mamba++) {

            view = JSON.parse(localStorage.getItem(mamba));

            if (view != null) {

                let template = `
            
                    <div class="card" id="card-${mamba}">
           
                        <p class="noteindex" id="noteindex-${mamba}">${view[0]}</p>
            
                        <hr class="nschr">
               
                        <p class="notecontent" id="notecontent-${mamba}">${view[1]}</p>
           
                        <div class="deletebtncontainer" id="deletebtncontainer-${mamba}">
               
                            <button class="deletebutton" id="deletebutton-${mamba}" onclick="myfunction(this)">Delete Note</button>
                    
                        </div>
                    
                    </div>
                    
                    `;

                noteshowcontainer.innerHTML += template;

            };

        };
    };

};

// noteshow by index
// mamba = 0;
setInterval(() => {
    
    view = JSON.parse(localStorage.getItem(mamba));

    if (view != null) {

        template = `

            <div class="card" id="card-${mamba}">

                <p class="noteindex" id="noteindex-${mamba}">${view[0]}</p>

                <hr class="nschr">

                <p class="notecontent" id="notecontent-${mamba}">${view[1]}</p>

                <div class="deletebtncontainer" id="deletebtncontainer-${mamba}">

                    <button class="deletebutton" id="deletebutton-${mamba}" onclick="myfunction(this)">Delete Note</button>

                </div>

            </div>

            `;

        noteshowcontainer.innerHTML += template;

        mamba += 1;

    };

}, 1000);

//to check is there a note
function fornonote() {

    byalogorithm2 = document.getElementById('byalogorithm');

    byalogorithm = document.getElementById('byalogorithm2');

    indicatorline = document.getElementById('indicatorline');

    if (localStorage.length === 0) {

        indicatorline.style.display = 'none';

        byalogorithm.style.display = 'inline';

        byalogorithm2.style.display = 'inline'

        mamba = 0;

    } else {

        byalogorithm.style.display = 'none';

        byalogorithm2.style.display = 'none';

        indicatorline.style.display = 'inline';

    };

};

//Delete function by index
function myfunction(params) {

    newparams = params.id.slice(13);

    localStorage.removeItem(newparams);

    params.parentElement.parentElement.remove();

    kalluconda = [];

    for (let sama = 0; sama <= localStorage.length; sama++) {

        kallusama = localStorage.getItem(sama);

        if (kallusama != null || kallusama != undefined) { kalluconda.push(kallusama); };

    };

    localStorage.clear();

    for (masa = 0; masa < kalluconda.length; masa++) {

        localStorage.setItem(masa, kalluconda[masa]);

    }

    Array.from(document.getElementsByClassName('card')).forEach((card) => { card.remove(); });

    tochecklocalstorage();

    fornonote();
};
