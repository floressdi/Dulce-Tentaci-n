// Show Menu 😎
let btnMenu = document.getElementById('bx-menu');
let showMenu = document.getElementById('menu-burger');

btnMenu.addEventListener('click', ()=>{
    showMenu.classList.toggle('show-menu');
    btnMenu.classList.toggle('bx-x')
})