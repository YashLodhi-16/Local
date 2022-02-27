class popUpInfo extends HTMLElement {

    static get observedAttributes() {
      return ['img', 'data-text'];
    }

    constructor(){
        super();

        // create a shadown root
        this.attachShadow({mode: 'open'});

        // create (nested) span elements
        const wrapper = document.createElement('span');
        wrapper.setAttribute('class', 'wrapper');

        const icon = wrapper.appendChild(document.createElement('span'));
        icon.setAttribute('class', 'icon');
        icon.setAttribute('tabindex', 0);

        // insert icon from defined attribute or default icon 
        const img = icon.appendChild(document.createElement('img'));
        img.src = this.hasAttribute('img') ? this.getAttribute('img') : 'img/default.png';

        const info = wrapper.appendChild(document.createElement('span'));
        info.setAttribute('class', 'info inline-block');
        // take attribute content and put it inside the info span
        info.textContent = this.getAttribute('data-text');

        // external stylesheets
        // const sheet = document.createElement('link');
        // sheet.setAttribute('rel', 'stylesheet');
        // sheet.setAttribute('href', '../../WEB_COMPONENTS/Component_css/utility.css')

        // create some css to apply to the shadow dom
        const style = document.createElement('style');
        style.textContent = `
        .wrapper {
          position: relative;
        }
        .info {
          font-size: 0.8rem;
          width: 200px;
          /* display: inline-block; */
          border: 1px solid black;
          padding: 10px;
          background: white;
          border-radius: 10px;
          opacity: 0;
          transition: 0.6s all;
          position: absolute;
          bottom: 20px;
          left: 10px;
          z-index: 3;
        }
        img {
          width: 1.2rem;
        }
        .icon:hover + .info, .icon:focus + .info {
          opacity: 1;
        }
      `;

      // attach the created elements to the shadow dom
      this.shadowRoot.append(style, wrapper);
    }



    connectedCallback() {
      console.log('connected');
    }

    disconnectedCallback() {
      console.log('disconnected');
    }

    attributeChangedCallback(name, oldValue, newValue) {
      console.log(name, oldValue, newValue);
      change(this, newValue)
    }
};

customElements.define('popup-info', popUpInfo);

function change(e, changedValue){
  const shadow = e.shadowRoot;
  shadow.querySelector('.info').textContent = changedValue;
}

for (i = 0; i< document.body.children.length; i++){
  if(document.body.children[i].localName === 'popup-info'){
    index = i;
    break;
  }
}
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  document.body.children[index].remove();
});

let setVal = 0;
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {
  	const arr = ['yash', 'lodhi', 'kallu', 'sama'];
  	const rs = document.body.children[index].shadowRoot;
  	rs.querySelector('.info').textContent = arr[setVal++];
	if(setVal === 4) setVal = 0;
});