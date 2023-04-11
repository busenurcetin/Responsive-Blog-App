const navItems= document.querySelector('.nav__items');
const openNavBtn= document.querySelector('#open__nav-btn');
const closeNavBtn= document.querySelector('#close__nav-btn');

//OPEN NAV DROPDOWN
const openNav= () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display= 'none';
    closeNavBtn.style.display= 'inline-block'

}

//CLOSE NAV DROPDOWN
const closeNav= () => {
    navItems.style.display = 'none';
    openNavBtn.style.display= 'inline-block';
    closeNavBtn.style.display= 'none'

}

openNavBtn.addEventListener('click',openNav)
closeNavBtn.addEventListener('click',closeNav)