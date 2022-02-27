class shadow extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = "<h2>Yash Lodhi</h2>";
        const content = template.content;
        shadowRoot.appendChild(content.cloneNode(true));
    }

    connectedCallback() {
        // properties
        console.log(this.shadowRoot.activeElement);
        console.log(this.shadowRoot.delegatesFocus);
        console.log(this.shadowRoot.fullscreenElement);
        console.log(this.shadowRoot.host); // returns host (<sha-dow>)
        console.log(this.shadowRoot.innerHTML); // return inner html
        console.log(this.shadowRoot.mode); // returns mode (open or closed)
        console.log(this.shadowRoot.pictureInPictureElement);
        console.log(this.shadowRoot.pointerLockElement);
        console.log(this.shadowRoot.styleSheets); // returns array of sytle sheets
        console.log(this.shadowRoot.getAnimations()); // returns arry of all animation objects currently in effect, whose target elements are descendants of the shadow tree.
        console.log(document.body.children[3].getRootNode({composed: true})); // return shadowRoot and if composed is set to true then return node beyond shadow root
        // event listener
        // this.onslotchange
        this.shadowRoot.addEventListener('click', (e) => {
            console.log(e.composed);
        });
    }
}
customElements.define('sha-dow', shadow);
document.body.append(document.createElement('sha-dow'));
document.querySelector('html').addEventListener('click', (e) => {
    // if shadow is closed then composed is equals to false, else true so you can see  event will propagate (prachaar) across the shadow DOM boundary into the standard DOM. 
    console.log(e.composed);

    // e.composedPath() returns an array of objects on which an event listener will be invoked. 
    console.log(e.composedPath());
});