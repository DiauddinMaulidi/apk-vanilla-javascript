let bodyColor = document.querySelector('body')
let buttonColor = document.getElementById('button')
let spanColor = document.querySelector('#formColor .colorBg span')

buttonColor.addEventListener('click', function(e) {
    e.preventDefault()
    const redColor = Math.floor(Math.random()*256)
    const greenColor = Math.floor(Math.random()*256)
    const bluColor = Math.floor(Math.random()*256)
    
    spanColor.innerText = `rgb(${redColor},${greenColor},${bluColor})`
    bodyColor.style.backgroundColor = `rgb(${redColor},${greenColor},${bluColor})`


})