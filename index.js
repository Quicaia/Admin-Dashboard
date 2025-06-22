
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#btn__menu");
const clouseBtn = document.querySelector("#btn__fechar");
const themeToggler = document.querySelector(".tema-dark");


//open sidebar
menuBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'block';
})

//open sidebar
clouseBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'none';
})

//Dark tema
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark__variaveis');

    //alterar a cor do button
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
});