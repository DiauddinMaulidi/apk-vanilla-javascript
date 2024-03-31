let button = document.querySelector('.btn-modal')
let buttonClose = document.querySelector('.btn-close')
let popModal = document.querySelector('.popModal')

button.addEventListener('click', function(e) {
    e.preventDefault()
    popModal.removeAttribute('hidden')
})
buttonClose.addEventListener('click', function(e) {
    e.preventDefault()
    popModal.setAttribute('hidden', true)
})