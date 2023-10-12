export function addOpen () {
    document.getElementById('modal').classList.add('open');
}

export function removeOpen () {
    document.getElementById('modal').classList.remove('open');
}

let burger = document.getElementById('header__button-burger');
burger.addEventListener("click", addOpen);

let close = document.getElementById('close');
close.addEventListener("click", removeOpen);

export const closeModal = event => {
    let target = event.target;

    if (target === modalElem) {
        modalElem.classList.remove('open');
    }
}

let modalElem = document.getElementById('modal');
modalElem.addEventListener("click", closeModal);