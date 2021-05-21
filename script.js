const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.responsive-navbar');

function hamToggle(e){
    e.preventDefault();
    this.classList.toggle('open');
    nav.classList.toggle('open');
    let expanded = this.attributes['aria-expanded'].value == "true";
    this.attributes['aria-expanded'].value = !expanded;
}

ham.addEventListener('click', hamToggle);


