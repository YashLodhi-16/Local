console.log('sama sama');
const shadow = simple_element.shadowRoot;
let myElement = shadow.querySelector('#myContent');
setTimeout(() => {
    myElement.style.color = 'red';
}, 10000);
myElement.addEventListener('click', () => {
    simple_element.foo();
    console.log('external script');
});