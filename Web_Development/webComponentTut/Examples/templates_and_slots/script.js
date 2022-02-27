// customElements.define('my-paragraph', 
// class extends HTMLElement {
//     constructor() {
//         super();
        
//         const my_paragraph = document.getElementById('my-paragraph');
//         const my_paragraph_content = my_paragraph.content;

//         const shadowRoot = this.attachShadow({mode: 'open'});
//         shadowRoot.appendChild(my_paragraph_content.cloneNode(true));

//         }
// });

// const temp = document.createElement('my-paragraph')
// document.body.appendChild(temp);

customElements.define('element-details', 
class extends HTMLElement {
    constructor() {
        super();
        
        const element_details_template = document.getElementById('element-details-template');
        const element_details_template_content = element_details_template.content;

        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(element_details_template_content.cloneNode(true));

        }
});

// const temp = document.createElement('element-details');
// document.body.appendChild(temp);