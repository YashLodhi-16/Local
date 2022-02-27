// grabing hamburger 
const hamburger = document.getElementById('hamburger');
// grabing navbar
const navbar = document.getElementById('navbar');
// add click event to hamburger
hamburger.addEventListener('click', () => {
    // add toggle class to navbar
    navbar.classList.add('toggle');
    // get navbar height
    const height = getComputedStyle(navbar).height;
    // remove toggle class
    navbar.classList.remove('toggle');
    // set navbar height using getComputedStyle functions height key.
    navbar.style.height = getComputedStyle(navbar).height;
    // if navbar height equals to 35 pixels then it will set navbar height to height variable.
    if(navbar.style.height === "35px") navbar.style.height = height;
    // else it will set navbar height to 35 pixels
    else navbar.style.height = '35px';
});

