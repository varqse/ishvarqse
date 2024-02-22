const menu = document.querySelector('.menu')
const HamburgerMenu = document.querySelector('.hamburgmenu')
const iconOpen = document.querySelector('.icon-open')
const iconClose = document.querySelector('.icon-close')

HamburgerMenu.addEventListener('click', displayMenu);
menu.addEventListener('click', displayMenu);


function displayMenu(){
    if(menu.classList.contains('tampil')){
        menu.classList.remove('tampil');
        iconOpen.style.display= 'inline';
        iconClose.style.display= 'none';
    }
    else{
        menu.classList.add('tampil');
        iconOpen.style.display= 'none';
        iconClose.style.display= 'inline';
    }
}