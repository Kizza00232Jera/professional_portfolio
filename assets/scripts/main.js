/* burger menu on and off*/

function menuOn(){
    const nav = document.querySelector('header > nav');
    nav.classList.add('active');
}

function menuOff(){
    const nav = document.querySelector('header > nav');
    nav.classList.remove('active');
}



/* refresh page on mobiles when clicking on about me or projects*/ 
/* not using anymore */
// const refreshSkills = document.querySelector('.refresh')

// const refreshPage = () => {
//     location.reload();
//     // console.log('here');
// }

// refreshSkills.addEventListener('click', refreshPage);

