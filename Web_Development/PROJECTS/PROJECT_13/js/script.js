// grab sumbitName from dom
const sumbitName = document.getElementById('sumbitName');

// add click event on it.
sumbitName.addEventListener("click", () => {
   // grab mainContainer from dom
   const mainContainer = document.getElementById('mainContainer');
   // grab modal from dom
   const modal = document.getElementById("modal");
   // grab getName from dom
   const getName = document.getElementById('getName');
   // collect getName value
   const getNameValue = getName.value;
   // call setName function with getNameValue argument
   setName(getNameValue);
   // set getName value to ""
   getName.value = "";
   // remove modal form dom
   modal.remove();
   // add block class in mainContainer
   mainContainer.classList.add('block');
});

// to set user name
function setName(value){
   // grab userName from dom
   const userName = document.getElementById('userName');
   // declare a default name
   const defaultName = "Unknown";
   // regular expression for checking getName value
   const regex = /\w+/;
   // one line if else condition
   // if value parameter passes then it will set userName textContent to value else it will set userName textContent to defaultName.
   regex.test(value) ? userName.textContent = value : userName.textContent = defaultName;
   // collect userName textContent
   const name = userName.textContent;
   // call main function with userName textContent argument
   main(name);
};

// grab tingSoundEffect from sound folder
const tingSoundEffect = new Audio('../sound/ting.mp3');
// to play tingSoundEffect audio
const playSound = () => {
   tingSoundEffect.play();
};

// to append given argument into chatMessageContainer
function add(msg, position){
   // define justify_content
   let justify_content;
   // if position is equals to left then it will set justify_content to start and call playSound function else it will set justify_content to end
   if(position === "left"){
      justify_content = "start";
      playSound();
   }else{
      justify_content = "end";
   }
   // set template to html string
   const template = `<div class="${position}ChatMessageContainer justify-${justify_content} my-4 flex" id="${position}ChatMessageContainer">
   <span class="${position}ChatMessage mx-2 p-1 b-radius border1px-black color-white break-word-all max-width-75" id="${position}ChatMessage">${msg}</span>
</div>`;
   // grab chatMessageContainer
   const chatMessageContainer = document.getElementById('chatMessageContainer');
   // append template to chatMessageContainer innerHTML
   chatMessageContainer.innerHTML += template;
   // collect scrolling height by getting chatMessageContainer inlineSize, remove px from it and convert to number.
   const scrollheight = Number(getComputedStyle(chatMessageContainer).inlineSize.slice(0, -2));
   // scroll chatMessageContainer by using scrollheight
   chatMessageContainer.scrollBy(0, scrollheight);
};

// to socket connect with socket io for input and output request
function main(name) {
// connect to io server in 8000 port 
socket = io("http://localhost:8000");
// sending new-user-joined event by using name parameter
socket.emit('new-user-joined', name);
// sending user-joined event by using name parameter
socket.on('user-joined', name => {
   // call add function to append new joined user name in chatMessageContainer to notify other users
   add(`${name} joined the chat`, 'right');
});
// receiving an event by using data object
socket.on('receive', data => {
   // call add function to append user to message to chatMessageContainer in the left position
   add(`${data.name}: ${data.message}`, 'left')
});
// receiving an event by using name parameter
socket.on('left', name => {
   // call add function to append user lefted message in the chatMessageContainer
   add(`${name} left the chat`, 'right');
});
};

// grab sendMessage from dom
const sendMessage = document.getElementById('sendMessage');
// add click event to it
sendMessage.addEventListener('click', () => {
   // grab writeMessage from dom
   const writeMessage = document.getElementById('writeMessage');
   // collect writeMessage value
   const val = writeMessage.value;
   // call add function to append backtick string in right
   add(`you: ${val}`, 'right');
   // allows you to throw custom events on the server and client
   socket.emit('send', val);
   // set writeMessage value to ""
   writeMessage.value = "";
});

