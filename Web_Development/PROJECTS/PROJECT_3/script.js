
fornonote();

tochecklocalstorage();
// responsive navbar
document.getElementById('hamburgerbtn').addEventListener('click', () => {

    let navbar = document.getElementById('navbar');

    let welcome = document.getElementById('welcome');

    if (navbar.style.height == '44px') {

        navbar.style.height = 'auto';

        welcome.style.marginTop = "12em";
    }
    else {

        navbar.style.height = '44px';

        welcome.style.marginTop = "4em";

    };

});
//search functionality
document.getElementById('inputbx').addEventListener('input', (e) => {

    allclasses = document.getElementsByClassName('card');

    indexfortraversal = 0;

    Array.from(allclasses).forEach((efg) => {

        inputtxt = document.getElementById('inputbx').value;

        allclasses = document.getElementsByClassName('card')[indexfortraversal].children[2].innerText;

        allclasses2 = document.getElementsByClassName('card')[indexfortraversal].children[0].innerText;

        if (allclasses.includes(inputtxt) || allclasses2.includes(inputtxt)) {

            efg.style.display = 'inline-block';

        }
        else if (inputtxt === '') {

            efg.style.display = 'inline-block';

        }
        else {

            efg.style.display = 'none';

        };

        indexfortraversal++;

    });

});
// to add note in local storage
document.getElementById('addnotebtn').addEventListener('click', () => {

    textarea = document.getElementById('textarea').value;
    
    inputtitle = document.getElementById('inputtitle').value;

    if (textarea==="" || inputtitle==="") {
        
        errorcontainer = document.getElementById('errorcontainer');
        
        errorcontainer.style.display = 'block';
        
    } else {

        errorcontainer.style.display = 'none';
        
        localStorage.setItem(inputtitle,textarea );
        
        liveload2(textarea,inputtitle,mamba);

        document.getElementById('inputtitle').value = "";
        
        document.getElementById('textarea').value = "";

        
        };

});
// click event for deleting all data from localStorage
document.getElementById('resetdata').addEventListener('click', () => {

    localStorage.clear();

    location.reload();

});
// to checking there are note available in localstorage or not
function tochecklocalstorage() {

    if (localStorage.length != 0) {

        for (mamba = 0; mamba < localStorage.length; mamba++) {

            jinna = localStorage.key(`${mamba}`);
            
            view = localStorage.getItem(`${jinna}`);
            

            if (view != null) {

                let template = `
            
            <div class="card" id="card-${mamba}">
           
            <p class="noteindex" id="noteindex-${mamba}">${jinna}</p>
            
                <hr class="nschr">
               
                <p class="notecontent" id="notecontent-${mamba}">${view}</p>
           
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
// live loading the note
function liveload2(textareavalue, inputittlevalue,indexmamba) {
   
    let template3 = `
   
    <div class="card" id="card-${indexmamba}">
   
        <p class="noteindex" id="noteindex-${indexmamba}">${inputittlevalue}</p>
   
        <hr class="nschr">
   
        <p class="notecontent" id="notecontent-${indexmamba}">${textareavalue}</p>
   
        <div class="deletebtncontainer" id="deletebtncontainer-${indexmamba}">
   
            <button class="deletebutton" id="deletebutton-${indexmamba}" onclick="myfunction(this)">Delete Note</button>
   
        </div>
   
    </div>
   
      `;
   
    noteshowcontainer.innerHTML+= template3;
   
    mamba++;

  }
// to check there are note available or not 
function fornonote() {

    byalogorithm2 = document.getElementById('byalogorithm');

    byalogorithm = document.getElementById('byalogorithm2');

    indicatorline = document.getElementById('indicatorline');

    if (localStorage.length === 0) {

        indicatorline.style.display = 'none';

        byalogorithm.style.display = 'inline';

        byalogorithm2.style.display = 'inline'

        mamba = 0;

    }

    else {

        byalogorithm.style.display = 'none';

        byalogorithm2.style.display = 'none';

        indicatorline.style.display = 'inline';

    };
};
//delete note function
function myfunction(params) {

    kalluconda = [];

    key = params.parentElement.parentElement.children[0].innerHTML;

    rm = params.parentElement.parentElement;

    for (let sama = 0; sama < localStorage.length; sama++) {

        kallusama = localStorage.key(sama);

        if (kallusama != null) { kalluconda.push(kallusama); };

        if (key == kalluconda[sama]) {

            localStorage.removeItem(kalluconda[sama]);

            rm.remove();

        };

    };

    fornonote();

};