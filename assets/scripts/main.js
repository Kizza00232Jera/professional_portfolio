function menuOn(){
    const nav = document.querySelector('header > nav');
    nav.classList.add('active');
}

function menuOff(){
    const nav = document.querySelector('header > nav');
    nav.classList.remove('active');
}