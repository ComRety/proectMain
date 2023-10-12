let burger = document.getElementById('header__button-burger');
burger.addEventListener("click", function() {
    document.getElementById('modal').classList.add('open');
})
let close = document.getElementById('close');
close.addEventListener("click", function() {
    document.getElementById('modal').classList.remove('open');
})

const closeModal = event => {
    let target = event.target;

    if (target === modalElem) {
        modalElem.classList.remove('open');
    }
}

let modalElem = document.getElementById('modal');
modalElem.addEventListener("click", closeModal);