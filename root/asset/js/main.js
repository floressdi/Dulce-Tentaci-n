// Show Menu 😎
let btnMenu = document.getElementById('bx-menu');
let showMenu = document.getElementById('menu-burger');
const btnLogin = document.getElementById('btn-burger-login');
const showLogin = document.getElementById('login');
const btnBack = document.getElementById('btn-back');


btnMenu.addEventListener('click', ()=>{
    showMenu.classList.toggle('show-menu');
    btnMenu.classList.toggle('bx-x')
})

btnLogin.addEventListener('click',()=>{
    showLogin.classList.toggle('show-login');
})

btnBack.addEventListener('click',()=>{
    showLogin.classList.toggle('show-login');
})