let addSubtract, btn;

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        init()
    }
}

function init() {
    btnAdd = document.querySelector('#btn-add')
    btnSubtract = document.querySelector('#btn-subtract')
        // console.log(btnSubtract)
    addSubtract = document.querySelector('#counter')
    btnAdd.addEventListener('click', add)
    btnSubtract.addEventListener('click', subtract)
}


let counter = 0

function add() {
    addSubtract.innerHTML = ++counter
}

function subtract() {
    addSubtract.innerHTML = --counter
}