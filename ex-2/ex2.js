let btn, inject

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        init()
    }
}

function init() {
    btn = document.querySelector('#btn')
    inject = document.querySelector('#injection')
    btn.addEventListener('click', lovesMe)
}

let x = 1 //am i allowed to declare this outside like this???

function lovesMe() {
    x++
    if (x % 2 === 0) {
        inject.innerHTML = 'She loves ME 💘💘💘💘'
    } else {
        inject.innerHTML = 'She does NOT love me😥😥😣'
    }
}