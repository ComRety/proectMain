let order = document.getElementById('button-call');
order.addEventListener("click", function() {
    document.getElementById('order-call').classList.add('order');
})

let orderOne = document.getElementById('call-popup');
orderOne.addEventListener("click", function() {
    document.getElementById('order-call').classList.add('order');
})

let orderClose = document.getElementById('button-close-order');
orderClose.addEventListener("click", function() {
    document.getElementById('order-call').classList.remove('order');
})

const closeOrderModal = event => {
    let target = event.target;

    if (target === orderElem) {
        orderElem.classList.remove('order');
    }
}

let orderElem = document.getElementById('order-call');
orderElem.addEventListener("click", closeOrderModal);