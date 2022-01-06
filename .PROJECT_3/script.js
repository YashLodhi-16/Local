
document.getElementById('hamburgerbtn').addEventListener('click', () => {

    let navbar = document.getElementById('navbar');

    let parentcontainer = document.getElementById('parentcontainer');

    if (navbar.style.height == '44px') {

        navbar.style.height = 'auto';

        parentcontainer.style.marginTop = "190px";
    }
    else {

        navbar.style.height = '44px';

        parentcontainer.style.marginTop = "3em";

    };

});

inputbx = document.getElementById('inputbx');
inputbx.addEventListener('input', (e) => {

    allclasses = document.getElementsByClassName('card');

    indexfortraversal = 0;

    Array.from(allclasses).forEach((efg) => {

        inputtxt = document.getElementById('inputbx').value;

        allclasses = document.getElementsByClassName('card')[indexfortraversal].children[2].innerText;

        indexfortraversal++;

        if (allclasses.includes(inputtxt)) {

            efg.style.display = 'inline-block';

        }
        else if (inputtxt === '') {

            efg.style.display = 'inline-block';

        }
        else {

            efg.style.display = 'none';

        };

    });

});

var index = 0;
document.getElementById('addnotebtn').addEventListener('click', () => {

    textarea = document.getElementById('textarea').value;

    noteObj = [];

    noteObj.push(textarea);

    localStorage.setItem(`${index}`, JSON.stringify(noteObj));

    document.getElementById('textarea').value = "";

    location.reload();

});

document.getElementById('resetdata').addEventListener('click', () => {

    localStorage.clear();

    location.reload();

});

for (index = 0; index <= localStorage.length; index++) {

    var view = JSON.parse(localStorage.getItem(`${index}`));

    if (localStorage.getItem(index) != null) {

        let template = `
        
        <div class="card" id="card-${index}">
       
        <p class="noteindex" id="noteindex-${index}">Note-${index}</p>
        
            <hr class="nschr">
           
            <p class="notecontent" id="notecontent-${index}">${view}</p>
       
            <div class="deletebtncontainer" id="deletebtncontainer-${index}">
           
                <button class="deletebutton" id="deletebutton-${index}">Delete Note</button>
                
                </div>
                
                </div>
                
                `;

        noteshowcontainer.innerHTML += template;

    };

};

fornonote = 0;
setInterval(() => {

    if (localStorage.length <= 0) {

        if (fornonote === 0) {

            template0 = `
            
            <span class="byalogorithm" id="byalogorithm">*</span>
           
            <p class="byalogorithm2" id="byalogorithm2">Please Add Some Note</p>
           
            `;

            indicator = document.getElementById('indicator');

            indicatorline = document.getElementById('indicatorline');

            indicatorline.style.display = 'none';

            indicator.innerHTML += template0;

            fornonote += 1;

        };

    }

    else {

        byalogorithm2 = document.getElementById('byalogorithm');

        byalogorithm = document.getElementById('byalogorithm2');

        if (byalogorithm != null || byalogorithm2 != null) {

            byalogorithm.remove();

            byalogorithm2.remove();

            indicatorline = document.getElementById('indicatorline');

            indicatorline.style.display = 'inline';

        };

    };

}, 1000);

setInterval(() => {

    var view = JSON.parse(localStorage.getItem(`${index}`));

    if (localStorage.getItem(`${index}`) != null) {

        let template = ` 
       
            <div class="card" id="card-${index - 1}">
           
            <p class="noteindex" id="noteindex-${index - 1}">Note-${index}</p>
            
                <hr class="nschr">
                
                <p class="notecontent" id="notecontent-${index - 1}">${view}</p>
               
                <div class="deletebtncontainer" id="deletebtncontainer-${index - 1}">
                
                    <button class="deletebutton" id="deletebutton-${index - 1}">Delete Note</button>
                    
                    </div>
                    
                    </div>
                    
                    `;

        noteshowcontainer.innerHTML += template;

        index += 1;

    };

}, 1000);



setInterval(() => {
    Array.from(document.getElementsByClassName('deletebutton')).forEach((e) => {
        e.setAttribute('onclick', 'myfunction(this.id)')
    })
}, 1000);

cbse = 1;
function myfunction(params) {
    console.log(params);
    let idindex = Number(params.slice(13));
    localStorage.removeItem(`${idindex}`);
    let remove = document.getElementById(`${params}`).parentElement.parentElement;
    // remove.remove();
    noteshowbox = document.getElementById('noteshowcontainer');
    if (noteshowbox.firstElementChild != null) {
        noteshowtxt = Number(noteshowbox.lastElementChild.id.slice(5));
        localarray = [];
        for (let i = 0; i <= noteshowtxt; i++) {
            localtxt = JSON.parse(localStorage.getItem(`${i}`));
            console.log(localtxt);
            localarray.push(localtxt);
            if (localtxt == null) { localarray.pop(i); };
        };
        console.log(localarray);
    };
    if (cbse === 1) {
        console.log(localarray);
        localStorage.clear();
        for (nn = 0; nn < localarray.length; nn++) {
            localStorage.setItem(`${nn}`, JSON.stringify(`${localarray[nn]}`));
        };
        cbse += 1; 
         remove.remove();
         location.reload();
    };
}
