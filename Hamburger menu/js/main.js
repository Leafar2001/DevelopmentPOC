const menuIcon = document.querySelector('.hamburgermenu');

const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () =>{
    navbar.classList.toggle('change');
})