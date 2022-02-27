class simple extends HTMLElement {
    constructor() {
        super();
        const temp = document.createElement('template');
        temp.innerHTML = `<h1 id="myContent">yash lodhi</h1> 
        `;
        const content = temp.content;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(content.cloneNode(true));
    }

    foo() {
        console.log('fuu');
    }

    connectedCallback() {
        const shadow = this.shadowRoot;
        // shadow.querySelector('#myContent').addEventListener('click', this.foo); internal script
        const script = document.createElement('script');
        script.src = "./sample.js"
        shadow.appendChild(script);
    }
}
customElements.define('simple-element', simple);
const simple_element = document.createElement('simple-element');
document.body.appendChild(simple_element);