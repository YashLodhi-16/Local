const word_count = document.createElement('word-count');

class WordCount extends HTMLParagraphElement {
    constructor() {
        super();

        // count words in element's parent element
        var wcParent = this.parentNode;

        function countWords(node){ 
            var text = node.innerText || node.textContent;
            return text.split(/\s+/g).length;
        }

        var count = "Words: " + countWords(wcParent);

        // create a shadow root
        var shadow = this.attachShadow({mode: 'open'});

        // create text node and add word count to it
        var text = document.createElement('span');
        text.textContent = count;

        // Append it to the shadow root
        shadow.appendChild(text);

        // Update count when element content changes
        setInterval(() => {
            var count = "Words: " + countWords(wcParent);
            text.textContent = count;
        }, 200);
    }
}

customElements.define('word-count', WordCount, {extends: 'p'});

// customElements.get('word-count);
// customElements.whenDefined('word-count');

// customElements.upgrade(word_count);
// console.assert(word_count instanceof WordCount);
// thrown an error if class is not empty