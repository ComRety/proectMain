export function addCall () {
    document.getElementById('modal-call').classList.add('call');
}

export function removeCall () {
    document.getElementById('modal-call').classList.remove('call');
}

let message = document.getElementById('massagge-pop');
message.addEventListener("click", addCall);

let messageClose = document.getElementById('button-close-call');
messageClose.addEventListener("click", removeCall);

let messageOne = document.getElementById('button-massage');
messageOne.addEventListener("click", addCall);

export const closemessageModal = event => {
    let target = event.target;

    if (target === messageElem) {
        messageElem.classList.remove('call');
    }
}

let messageElem = document.getElementById('modal-call');
messageElem.addEventListener("click", closemessageModal);