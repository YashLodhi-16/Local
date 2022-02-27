console.log("Yash Lodhi");

let navbar = document.getElementById('navbar');
// let navbarOriginalHeight = window.getComputedStyle(navbar).height;
// navbar.style.height = navbarOriginalHeight;
let hamburgerbox = document.getElementById('hamburgerbox');
hamburgerbox.addEventListener('click', function () {
    let newHeightValue = "119px";
    let oldHeightValue = '22px';
    let contentbox = document.getElementById('contentbox');
    if (navbar.style.height == oldHeightValue) { 
        navbar.style.height = newHeightValue;
        let navbarOffsetHeight = `${navbar.offsetHeight+10}px`
        contentbox.style.marginTop = navbarOffsetHeight;
    }
    else { 
        navbar.style.height = oldHeightValue;
        contentbox.style.marginTop = '55px';
     };
});

let searchbar = document.getElementById('searchbar');
searchbar.addEventListener('input',function(element){
    let searchbarValue = searchbar.value; 
    newscontent = document.getElementsByClassName('newscontent');
    for (let index = 1; index <= newscontent.length; index++) {
        const newstitle = document.getElementById(`newstitle-${index}`).innerHTML;
        const newsdesc = document.getElementById(`newsdesc-${index}`).innerHTML;
        let newscotnentid = document.getElementById(`newscontent-${index}`);
        let newscontentdisplay = window.getComputedStyle(newscotnentid).display;
        let block = 'block';
        let none = 'none';
        newscotnentid.style.display = newscontentdisplay;
        if(searchbarValue === "" && searchbarValue === " "){
            newscotnentid.style.display = block;
        }
        else if(newsdesc.includes(searchbarValue) || newstitle.includes(searchbarValue)){
            newscotnentid.style.display = block; 
        }else{
            newscotnentid.style.display = none;
        }
    }
});

function fetchdata() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2814a19067364daeba988bd40917141e', true);

    xhr.onload = function () {
        if (this.status === 200) {
            responsetxt = JSON.parse(this.responseText);
            for (i = 1; i <= 10; i++) {
                let iIndex = i-1;//using minus because it has only 10 news
                title = responsetxt.articles[iIndex].title;
                description = responsetxt.articles[iIndex].description;
                content = responsetxt.articles[iIndex].content;
                url = responsetxt.articles[iIndex].url;
                sliceindex = content.indexOf('chars')-7; 
                content = content.slice(0,sliceindex);
                let template = ` <div class="newscontent border2px b-radius my-1" id="newscontent-${i}" onclick="expand(this)">
                <div class="newscontenthead padx-2 pady-2" id="newscontenthead-${i}">
                    <p class="inline bold newsindex">Breaking News ${i}: </p>
                    <p class="inline newsheadline" id="newstitle-${i}">${title}</p>
                </div>
                <div class="newscontentbody padx-2 pady-2 none" id="newscontentbody-${i}">
                    <p class="newsdesc" id="newsdesc-${i}">${content}</p>
                    <p class="newsurl flex justify-center padx-1" id="newsurl-${i}">
                        <a class="text-none underline articleurl" href="${url}">You can read the whole article here</a>
                    </p>
                </div>
            </div>`;
            document.getElementById('newscontentbox').innerHTML += template;
            }
        }else{
            document.getElementById('newscontentbox').innerHTML = `sorry error occured`;
        }
    }

    xhr.send();
}

fetchdata();

function expand(newscontainer){ 
    newslchild = newscontainer.lastElementChild
    newslchildisplay = window.getComputedStyle(newslchild).display;
    newslchild.style.display = newslchildisplay
    if(newslchild.style.display == 'none'){ newslchild.style.display = 'block'; }
    else{ newslchild.style.display = 'none'; }
}