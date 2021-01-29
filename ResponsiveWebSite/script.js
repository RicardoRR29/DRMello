

const nav = document.querySelector('nav')
window.addEventListener('scroll', changeNav)
setTimeout(showWhatsapp,3000)

//window.addEventListener('click', e => console.log(e))

const contact_area = document.querySelector('.contact-area')
//window.addEventListener('scroll', showContactArea)

const compactMenu = document.getElementById('compact-menu')
const sidebar = document.querySelector('.sidebar')
compactMenu.addEventListener('click', toggleMenu)

//let frases = ["Organização da tomada de decisão", "Desconhecimento do próximo salto de negócio", "Dificuldade de crescimento", "Expansão de mercado", "Perda de mercado"] 

function toggleMenu() {
    sidebar.classList.toggle('active')
}

function showWhatsapp() {
    wp = document.getElementById('wp')
    wp.style.display = 'block'
    wp.addEventListener('click', mandarMensagem)
    

}

function changeNav() {
    if(window.scrollY > nav.offsetHeight + 100) {
        nav.classList.add('active')
    } else {

        nav.classList.remove('active')
    }
}

function mandarMensagem() {
    window.open('https://api.whatsapp.com/send?phone=5527992868233&text=Bom%20dia%2C%20gostaria%20de%20perguntar%20sobre%20a%20empresa.', '_blank')
}

function showWhatsapp() {
    wp = document.getElementById('wp')
    wp.style.display = 'block'
    wp.addEventListener('click', mandarMensagem)
    wp.style.opacity = 0;
    setTimeout(() => {
        wp.style.opacity = 1;
    }, this.animationDelay + 3000);   

}
/*
function showContactArea() {
    if(window.scrollY > 2200) {
        contact_area.style.display = 'flex'
    } else {
        contact_area.style.display = 'none'
    }
}

*/

const cards = document.querySelectorAll('.servicos-card div')


cards.forEach(card => {
    card.addEventListener('click', toggleActive)
})

function toggleActive(e) {
    let elem = e.target 
    while(elem.offsetParent.classList.value != 'servicos-card'){
        elem = elem.offsetParent
    }    
    elem.classList.toggle('active')

    let sizes = {}
    let cell = {
        left: '44vw',
        right: '67vw',
        normal: '30vw',
    }

    let desktop = {
        left: '26vw',
        right: '36vw',
        normal: '20vw',
    }

    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if(width > 1050) {
        sizes = desktop
    } else {
        sizes = cell 
    }

    
    const bgColor = document.querySelector('.servicos-card')
    if(bgColor.classList.height != sizes.left && bgColor.classList.height != sizes.right) {
        bgColor.style.height = sizes.normal
        bgColor.style.backgroundColor = '#aaa'
    }
    if(elem.classList.value.split(' ')[0] == 'servico-left' && elem.classList.value.split(' ')[1] == 'active'){
        bgColor.style.height = sizes.left
        bgColor.style.backgroundColor = '#555'

    } else if(elem.classList.value.split(' ')[0] == 'servico-right' && elem.classList.value.split(' ')[1] == 'active'){
        bgColor.style.height = sizes.right
        bgColor.style.backgroundColor = '#555'

    }
}

function hasActive() {
    
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 5);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    element.style.maxHeight = '100%'
    console.log(element)
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }

        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;

    }, 5);

}

const contactBtns = document.querySelectorAll('.contactBtn')
contactBtns.forEach(btn => btn.addEventListener('click', showContactArea))

function showContactArea() {
    const cntArea = document.querySelector('.contact-area')
    cntArea.style.display = 'block'
}