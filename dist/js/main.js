//  SELECTING ELEMENTS 
// BUTTON DIV
const menuBtn = document.querySelector('.menu-btn');
// NAV
const menu = document.querySelector('.menu');
// MENU NAV == UL
const menuNav = document.querySelector('.menu-nav');
// with portrait
const menuBranding = document.querySelector('.menu-branding');
// nav-items == li's

const navItems = document.querySelectorAll('.nav-item');

// initial state of overlay open or closed
// dafault is false => humbager
let showMenu = false;
menuBtn.addEventListener('click',toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');

        navItems.forEach(item=>item.classList.add("show"))
        //reset menu state 
        showMenu = true;
    }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');

        navItems.forEach(item=>item.classList.remove("show"))
        //reset menu state 
        showMenu = false;

    }
}
