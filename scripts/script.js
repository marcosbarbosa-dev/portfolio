// MENU RESPONSIVO

let menu = document.querySelector('#menu')
let nav = document.querySelector('#nav')

menu.addEventListener('click', ()=>{
    if(nav.style.display == 'flex') {
        nav.style.display = 'none'
        menu.src = 'assets/header/menuOpen.svg'
    } else {
        nav.style.display = 'flex'
        menu.src = 'assets/header/menuClose.svg'
    }
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
    } else {
        emailIco.src = 'assets/contato/emailL.png'
        telefoneIco.src = 'assets/contato/telefoneL.png'
        githubIco.src = 'assets/contato/githubL.png'
        instagamIco.src = 'assets/contato/instagramL.png'
    }
})

// MODAL

const modalBG = document.querySelector('.modalBG')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('#closeModal')
let titleModal = document.querySelector('#titleModal')
let contentModal = document.querySelector('#contentModal')
let dataModal = document.querySelector('#dataModal')
let language = document.querySelector('#language')
let devNotes = document.querySelector('#devNotes')
let sistemaEscolar = document.querySelector('#sistemaEscolar')
let boletimJS = document.querySelector('#boletimJS')
let cloneGoogle = document.querySelector('#cloneGoogle')
let cordel = document.querySelector('#cordel')
let cardapio = document.querySelector('#cardapio')

devNotes.addEventListener('click', ()=> {
    openModal() 
    titleModal.innerHTML = 'DevNotes'
    contentModal.innerHTML = 'Site de anotações pessoais que desenvolvi ao ter meus primeiros contatos com HTML5 e CSS3. Um metódo de aperfeiçoar meus conhecimentos enquanto estudava os mesmos.'
    language.innerHTML = 'HTML - CSS - JS'
    dataModal.innerHTML = 'Desenvolvido em: 19/07/2022'
})
sistemaEscolar.addEventListener('click', ()=> {
    openModal() 
    titleModal.innerHTML = 'Sistema Escolar'
    contentModal.innerHTML = 'Desenvolvi um sistema básico escolar, com funções de cadastro, login, e conteúdos de visualizações exclusivas para administrador, armazenando dados de cadastros no localStorage.<br>Crie um usuário com user "admin", e outro com usuário de sua preferência para visualizar os conteúdos.'
    language.innerHTML = 'HTML - CSS - JS'
    dataModal.innerHTML = 'Desenvolvido em: 23/08/2022'
})
boletimJS.addEventListener('click', ()=> {
    openModal() 
    titleModal.innerHTML = 'Boletim Escolar'
    contentModal.innerHTML = 'Desenvlvi um boletim escolar onde ao preencher os dados do aluno, ele designará automaticamente o nome para lista de "aprovados" ou "reprovados", conforme a situação do aluno.'
    language.innerHTML = 'HTML - CSS - JS'
    dataModal.innerHTML = 'Desenvolvido em: 17/08/2022'
})
cloneGoogle.addEventListener('click', ()=> {
    openModal() 
    titleModal.innerHTML = 'Clone Google'
    contentModal.innerHTML = 'Desenvolvi um clone do site do Google para aperfeiçoar meus conhecimentos em HTML e CSS.'
    language.innerHTML = 'HTML - CSS'
    dataModal.innerHTML = 'Desenvolvido em: 20/07/2022'
})
cordel.addEventListener('click', ()=> {
    openModal() 
    titleModal.innerHTML = 'Projeto Cordel'
    contentModal.innerHTML = 'Projeto desenvolvido através das aulas do Curso em Vídeo ministrada pelo professor Gustavo Guanabara.'
    language.innerHTML = 'HTML - CSS'
    dataModal.innerHTML = 'Desenvolvido em: 12/07/2022'
})
cardapio.addEventListener('click', ()=> {
    openModal() 
    titleModal.innerHTML = 'Cardápio'
    contentModal.innerHTML = 'Estou desenvolvendo um cardápio online, aonde irei incrementar algumas funções com o uso do localStorage.'
    language.innerHTML = 'HTML - CSS - JS'
    dataModal.innerHTML = 'Desenvolvido em: -'
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
document.addEventListener('keydown', (event) => 
event.key === "Escape" ? closeNow() : ''
);