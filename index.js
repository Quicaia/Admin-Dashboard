
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#btn__menu");
const clouseBtn = document.querySelector("#btn__fechar");

menuBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'block';
})
clouseBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'none';
})