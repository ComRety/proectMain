export function addOrder () {
    document.getElementById('order-call').classList.add('order');
}

export function removeOrder () {
    document.getElementById('order-call').classList.remove('order');
}

let order = document.getElementById('button-call');
order.addEventListener("click", addOrder);

let orderOne = document.getElementById('call-popup');
orderOne.addEventListener("click", addOrder);

let orderClose = document.getElementById('button-close-order');
orderClose.addEventListener("click", removeOrder);

export const closeOrderModal = event => {
    let target = event.target;

    if (target === orderElem) {
        orderElem.classList.remove('order');
    }
}

let orderElem = document.getElementById('order-call');
orderElem.addEventListener("click", closeOrderModal);