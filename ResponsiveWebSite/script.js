
const nav = document.querySelector('nav')
window.addEventListener('scroll', changeNav)
setTimeout(showWhatsapp,3000)

const contact_area = document.querySelector('.contact-area')
//window.addEventListener('scroll', showContactArea)

const compactMenu = document.getElementById('compact-menu')
const sidebar = document.querySelector('.sidebar')
compactMenu.addEventListener('click', toggleMenu)

//let frases = ["Organização da tomada de decisão", "Desconhecimento do próximo salto de negócio", "Dificuldade de crescimento", "Expansão de mercado", "Perda de mercado"] 

function toggleMenu() {
    sidebar.classList.toggle('active')
}

/*
function toggleMenu() {
    if(sidebar.classList.length == 1){
        sidebar.classList.add('active')
        sidebar.style.opacity = 0;
        setTimeout(() => {
            sidebar.style.opacity = 1;
        }, this.animationDelay + 3000);
    } else {
        sidebar.classList.remove('active')
        sidebar.style.opacity = 1;
        setTimeout(() => {
            sidebar.style.opacity = 0;
        }, this.animationDelay + 3000);
    }
     
}
*/
function showWhatsapp() {
    wp = document.getElementById('wp')
    wp.style.display = 'block'
    wp.addEventListener('click', mandarMensagem)
    

}

function changeNav() {
    if(window.scrollY > nav.offsetHeight + 100) {
        nav.classList.add('active')
        console.log('sim')
    } else {
        console.log('nao')

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