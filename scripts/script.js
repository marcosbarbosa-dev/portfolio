// MENU
let menu = document.querySelector('#menu')
let nav = document.querySelector('#nav')
let itemMenu = document.querySelector('ul')

menu.addEventListener('click', ()=>{
    if(nav.style.display == 'flex') {
        nav.style.display = 'none'
        menu.src = 'assets/header/menuOpen.svg'
    } else {
        nav.style.display = 'flex'
        menu.src = 'assets/header/menuClose.svg'
    }
})
itemMenu.addEventListener('click', ()=> {
    nav.style.display = 'none'
    menu.src = 'assets/header/menuOpen.svg'
})

// TEMA
let temaBtn = document.querySelector('#theme')
let ball = document.querySelector('.ball')
let themeLabel = document.querySelector('#themeLabel')
let main = document.querySelector('#main')
let emailIco = document.querySelector('#emailIco')
let telefoneIco = document.querySelector('#telefoneIco')
let githubIco = document.querySelector('#githubIco')
let instagamIco = document.querySelector('#instagramIco')
let toTopIco = document.querySelector('#toTop')

temaBtn.addEventListener('change', ()=> {
    ball.classList.toggle('btnDarkBall')
    themeLabel.classList.toggle('btnDarkLabel')
    main.classList.toggle('light')
})

let altern = true
temaBtn.addEventListener('click', ()=> {
    altern = !altern
    if(altern) {
        emailIco.src = 'assets/contato/emailD.png'
        telefoneIco.src = 'assets/contato/telefoneD.png'
        githubIco.src = 'assets/contato/githubD.png'
        instagamIco.src = 'assets/contato/instagramD.png'
        toTopIco.src = 'assets/btn/toTop.png'
    } else {
        emailIco.src = 'assets/contato/emailL.png'
        telefoneIco.src = 'assets/contato/telefoneL.png'
        githubIco.src = 'assets/contato/githubL.png'
        instagamIco.src = 'assets/contato/instagramL.png'
        toTopIco.src = 'assets/btn/toTopLight.png'
    }
})

// SCROLL ANIMATION
const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'
function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 3/4)
    target.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)
        }
    })
}
animeScroll()
window.addEventListener('scroll', function() {
    animeScroll()
})

// MODAL
const modalBG = document.querySelector('.modalBG')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('#closeModal')
const closeModalBtn = document.querySelector('#closeModalBtn')
let titleModal = document.querySelector('#titleModal')
let contentModal = document.querySelector('#contentModal')
let dataModal = document.querySelector('#dataModal')
let language = document.querySelector('#language')
let devNotes = document.querySelector('#devNotes')
let sistemaEscolar = document.querySelector('#sistemaEscolar')
let boletimJS = document.querySelector('#boletimJS')
let cloneGoogle = document.querySelector('#cloneGoogle')
let cordel = document.querySelector('#cordel')
let android = document.querySelector('#android')

devNotes.addEventListener('click', ()=> {
    openModal() 
    titleModal.innerHTML = 'DevNotes'
    contentModal.innerHTML = '<p>Site de anota????es pessoais que desenvolvi ao ter meus primeiros contatos com HTML5 e CSS3. Um met??do de aperfei??oar meus conhecimentos enquanto estudava.</p>'
    language.innerHTML = 'HTML - CSS - JS'
    dataModal.innerHTML = 'Desenvolvido em: 19/07/2022'
})
sistemaEscolar.addEventListener('click', ()=> {
    openModal() 
    titleModal.innerHTML = 'Sistema Escolar'
    contentModal.innerHTML = '<p>Desenvolvi um sistema b??sico escolar. Nele adiconei dois tipos de usu??rios (ambos dever??o ser cadastrados). O sitema possui p??gina de cadastro, login e a p??gina index com os conte??dos. Atrav??s do JS, permiti que apenas os usu??rios logados possam ver o conte??do do index. Fiz isso atrav??s de um token aleat??rio que ?? criado toda vez que o usu??rio faz o login. J?? a parte de cadastro, todos os dados s??o armazenados em um array no localStorage.</p><p>- Cadastre um novo usu??rio com o user: admin e outro com user de sua prefer??ncia. O usu??rio admin poder?? ver dentro da p??gina index mais informa????es do que um usu??rio com nome diferente.'

    language.innerHTML = 'HTML - CSS - JS'
    dataModal.innerHTML = 'Desenvolvido em: 23/08/2022'
})
boletimJS.addEventListener('click', ()=> {
    openModal() 
    titleModal.innerHTML = 'Boletim Escolar'
    contentModal.innerHTML = '<p>Desenvolvi um boletim escolar onde ao preencher os dados do aluno, ele designar?? automaticamente o nome para lista de "aprovados" ou "reprovados", conforme a situa????o do aluno.</p>'
    language.innerHTML = 'HTML - CSS - JS'
    dataModal.innerHTML = 'Desenvolvido em: 17/08/2022'
})
cloneGoogle.addEventListener('click', ()=> {
    openModal() 
    titleModal.innerHTML = 'Clone Google'
    contentModal.innerHTML = '<p>Desenvolvi um clone do Google para aperfei??oar meus conhecimentos em HTML e CSS.</p>'
    language.innerHTML = 'HTML - CSS'
    dataModal.innerHTML = 'Desenvolvido em: 20/07/2022'
})
cordel.addEventListener('click', ()=> {
    openModal() 
    titleModal.innerHTML = 'Projeto Cordel'
    contentModal.innerHTML = '<p>Projeto desenvolvido atrav??s das aulas do Curso em V??deo ministrada pelo professor Gustavo Guanabara.</p>'
    language.innerHTML = 'HTML - CSS'
    dataModal.innerHTML = 'Desenvolvido em: 12/07/2022'
})
android.addEventListener('click', ()=> {
    openModal() 
    titleModal.innerHTML = 'Projeto Android'
    contentModal.innerHTML = '<p>Projeto desenvolvido atrav??s das aulas do Curso em V??deo ministrada pelo professor Gustavo Guanabara.</p>'
    language.innerHTML = 'HTML - CSS'
    dataModal.innerHTML = 'Desenvolvido em: 05/07/2022'
})



function openModal() {
    modalBG.style.display = 'block'
    modal.style.display = 'block'
}

closeModal.addEventListener('click', closeNow)
function closeNow() {
    modalBG.style.display = 'none'
    modal.style.display = 'none'
    titleModal.innerHTML = ''
    contentModal.innerHTML = ''
    language.innerHTML = ''
    dataModal.innerHTML = ''
}

closeModalBtn.addEventListener('click', closeNowBtn)
function closeNowBtn() {
    modalBG.style.display = 'none'
    modal.style.display = 'none'
    titleModal.innerHTML = ''
    contentModal.innerHTML = ''
    language.innerHTML = ''
    dataModal.innerHTML = ''
}
modalBG.addEventListener('click', closeOutModal)
function closeOutModal() {
    modalBG.style.display = 'none'
    modal.style.display = 'none'
    titleModal.innerHTML = ''
    contentModal.innerHTML = ''
    language.innerHTML = ''
    dataModal.innerHTML = ''
}
document.addEventListener('keydown', (event) => 
event.key === "Escape" ? closeNow() : ''
);