let message = document.getElementById('massagge-pop');
message.addEventListener("click", function() {
    document.getElementById('modal-call').classList.add('call');
})

let messageClose = document.getElementById('button-close-call');
messageClose.addEventListener("click", function() {
    document.getElementById('modal-call').classList.remove('call');
})

let messageOne = document.getElementById('button-massage');
messageOne.addEventListener("click", function() {
    document.getElementById('modal-call').classList.add('call');
})

const closemessageModal = event => {
    let target = event.target;

    if (target === messageElem) {
        messageElem.classList.remove('call');
    }
}

let messageElem = document.getElementById('modal-call');
messageElem.addEventListener("click", closemessageModal);