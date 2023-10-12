let readAll = document.getElementById('readAll');
readAll.addEventListener("click", function() {
    let read = document.getElementById('inBlock');
    read.style.height = 'auto';
    readAll.style.display = 'none';
    let readClose = document.getElementById('readClose');
    readClose.style.display = 'inline';
})

if (matchMedia) {
    let screen = window.matchMedia("(min-width:768px)");
    screen.addEventListener("change", closeText);
    closeText(screen);
}

function closeText(screen) {
    if (screen.matches) {
        let readClose = document.getElementById('readClose');
        readClose.addEventListener("click", function() {
        let read = document.getElementById('inBlock');
        read.style.height = '160px';
        readClose.style.display = 'none';
        readAll = document.getElementById('readAll');
        readAll.style.display = 'inline';
    })} else {
            let readClose = document.getElementById('readClose');
            readClose.addEventListener("click", function() {
            let read = document.getElementById('inBlock');
            read.style.height = '100px';
            readClose.style.display = 'none';
            readAll = document.getElementById('readAll');
            readAll.style.display = 'inline';
})
    }
}