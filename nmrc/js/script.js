let burgerMenu = document.querySelector('.header__nav-burger')
let navMenu= document.querySelector('.header__nav-menu')
let navContainer= document.querySelector('.header__nav')

let ifClick;

function BurgerClicked() {

    if(burgerMenu.classList.contains('active')){
        burgerMenu.classList.remove('active')
        navMenu.classList.remove('active')
        navContainer.classList.remove('active')     
    }
    else {
        burgerMenu.classList.add('active')
        navMenu.classList.add('active')
        navContainer.classList.add('active')
    }
    

}