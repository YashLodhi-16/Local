console.log('yashlodhi');

class PopUpInfo extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});

        let wrapper = document.createElement('span');
        let icon = document.createElement('span');
        icon.setAttribute('class', 'icon');
        icon.setAttribute('tabindex', 0);
        let info = document.createElement('class', 'info');
        info.setAttribute('class', 'info');

        let text = this.getAttribute('data-text');
        info.textContent = text;

        let img = document.createElement('img');
        img.src = this.hasAttribute('img')? this.getAttribute('img') : 'img/default.png';
        icon.appendChild(img);

        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'style.css');
        
        wrapper.appendChild(icon);
        wrapper.appendChild(info);
        shadow.appendChild(linkElem);
        shadow.appendChild(wrapper);
    }
}   

customElements.define('popup-info', PopUpInfo);

const popup_info = document.createElement('popup-info');
popup_info.setAttribute('img', 'https://codewithharry.com/favicon.ico');
popup_info.setAttribute('data-text', 'yash');
document.body.innerHTML += popup_info.outerHTML;