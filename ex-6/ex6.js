let input
let button
let injectHere
let emailList = ['jb.haim.rubin@gmail.com', 'yossi@gmail.com', 'avi@gmail.com']

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        init()
    }
}

function init() {
    input = document.querySelector('#email')
    button = document.querySelector('#btn')
    injectHere = document.querySelector('#injectResponse')

    button.addEventListener('click', checkIt)
}




function checkIt() {
    let emailEntered = input.value

    let emailExists = emailList.filter(email => email === emailEntered)
    console.log('emailExists', emailExists)

    if (emailExists.length) {
        injectHere.innerHTML = 'This email exists in the system'
        injectHere.classList.remove('borderMeDoesNotExist')
        injectHere.classList.add('borderMeExists')

    } else {
        injectHere.innerHTML = 'Email is not in the system'
        injectHere.classList.remove('borderMeExists')
        injectHere.classList.add('borderMeDoesNotExist')
    }
}