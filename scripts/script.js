// MENU RESPONSIVO

let menu = document.querySelector('#menu')
let nav = document.querySelector('#nav')

menu.addEventListener('click', ()=>{
    if(nav.style.display == 'flex') {
        nav.style.display = 'none'
        menu.src = 'assets/header/menuOpen.png'
    } else {
        nav.style.display = 'flex'
        menu.src = 'assets/header/menuClose.png'
    }
})

// TEMA

let temaBtn = document.querySelector('#theme')
let ball = document.querySelector('.ball')
let themeLabel = document.querySelector('#themeLabel')
let main = document.querySelector('#main')

temaBtn.addEventListener('change', ()=> {
    ball.classList.toggle('btnDarkBall')
    themeLabel.classList.toggle('btnDarkLabel')
    main.classList.toggle('light')
})