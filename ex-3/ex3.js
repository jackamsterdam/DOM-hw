let body, btn

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        init()
    }
}

function init() {
    body = document.querySelector('body')
    btn = document.querySelector('#btn')
    btn.addEventListener('click', () => {
        body.classList.add('selected')
    })
}