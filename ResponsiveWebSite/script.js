

const nav = document.querySelector('nav')
window.addEventListener('scroll', changeNav)
setTimeout(showWhatsapp,3000)

//window.addEventListener('click', e => console.log(e))

const contact_area = document.querySelector('.contact-area')
//window.addEventListener('scroll', showContactArea)
const sidebar = document.querySelector('.sidebar')
const compactMenu = document.getElementById('compact-menu')
compactMenu.addEventListener('click', toggleMenu)
const sidebarBtns = document.querySelectorAll('.sidebar a')
sidebarBtns.forEach(btn => btn.addEventListener('click', hideSidebar))

function hideSidebar() {
    sidebar.classList.remove('active')
}

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
const cardGrids = document.querySelectorAll('.card-grid')


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
        right: '110vw',
        left: '125vw',
        normal: '30vw',
        marginRight: '22vw',
        marginLeft: '43vw'
    }

    let desktop = {
        right: '65vw',
        left: '75vw',
        normal: '20vw',
        marginRight: '0',
        marginLeft: '10vw'
    }

    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if(width > 1050) {
        sizes = desktop
    } else {
        sizes = cell
        if (width < 500){
            sizes.left = '180vw'
            sizes.right = '146vw'
        }
    }
    const cardGrids = document.querySelectorAll('.cards-section')
    const gridCards = document.querySelectorAll('.card-grid')
    const bgColor = document.querySelector('.servicos-section')
    if(bgColor.classList.height != sizes.left && bgColor.classList.height != sizes.right) {
        bgColor.style.height = sizes.normal
        bgColor.style.backgroundColor = '#aaa'
        cardGrids.forEach(cardGrid => cardGrid.style.display = 'none')
        gridCards.forEach(gridCard => gridCard.classList.remove('active'))
        //cardGrids[0].style.marginTop = '20vw'
        
    }
    if(elem.classList.value.split(' ')[0] == 'servico-left' && elem.classList.value.split(' ')[1] == 'active'){
        bgColor.style.height = sizes.left
        bgColor.style.backgroundColor = '#777'
        gridCards[0].classList.add('active')
        cardGrids[0].style.display = 'grid'
        cardGrids[0].style.marginTop = sizes.marginLeft

    } else if(elem.classList.value.split(' ')[0] == 'servico-right' && elem.classList.value.split(' ')[1] == 'active'){
        bgColor.style.height = sizes.right
        bgColor.style.backgroundColor = '#777'
        gridCards[1].classList.add('active')
        cardGrids[1].style.display = 'grid'
        cardGrids[1].style.marginTop = sizes.marginRight

    }
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