function openNav() {
    let links = document.querySelector('.mainNav');
    console.log('click')
    links.classList.toggle('showNav');
}

let navBar = document.querySelector('#navBar');
navBar.addEventListener('click', openNav);
