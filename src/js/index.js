let show = document.getElementById('all-brands');
show.addEventListener('click', openBrands);
function openBrands() {
    let forFrid = document.getElementById('grid-for-swiper');
    forFrid.style.height = 'auto';
    show.style.display = 'none';
    let hides = document.getElementById('hide-brands');
    hides.style.display = 'inline';
}

let hide = document.getElementById('hide-brands');
hide.addEventListener('click', hideBrands);
function hideBrands() {
    let forFrid = document.getElementById('grid-for-swiper');
    forFrid.style.height = '170px';
    show.style.display = 'inline';
    let hides = document.getElementById('hide-brands');
    hides.style.display = 'none';
}

let showTechnic = document.getElementById('all-technic');
showTechnic.addEventListener('click', openTechnic);
function openTechnic() {
    let forFrid = document.getElementById('grid-technic');
    forFrid.style.height = 'auto';
    showTechnic.style.display = 'none';
    let hides = document.getElementById('hide-technic');
    hides.style.display = 'inline';
}

let hideTechnic = document.getElementById('hide-technic');
hideTechnic.addEventListener('click', hideTechni);
function hideTechni() {
    let forFrid = document.getElementById('grid-technic');
    forFrid.style.height = '170px';
    showTechnic.style.display = 'inline';
    let hides = document.getElementById('hide-technic');
    hides.style.display = 'none';
}