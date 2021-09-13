let btn, inject

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        onInit()
    }
}

function onInit() {
    btn = document.querySelector('#order-btn')
    inject = document.querySelector('#inject') //same name ok???????
    btn.addEventListener('click', injectText) //this needs to be inside here to work

}



function injectText() {
    let txt = 'Sorry, this product is out of stock'
        // btn.innerHTML = txt 
    inject.innerHTML = txt
}