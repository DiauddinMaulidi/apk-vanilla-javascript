let navbarButton = document.querySelectorAll('.container .navbar ul li')
let item = document.querySelectorAll('.content .item')

navbarButton.forEach(function(navBut) {
    navBut.addEventListener('click', function() {
        item.forEach(function(items) {
            if( navBut.classList.contains('breakfast') ) {
                if( !items.classList.contains('breakfast') ) {
                    items.setAttribute('hidden', true)
                } else {
                    items.removeAttribute('hidden')
                }
            } else if( navBut.classList.contains('lunch') ) {
                if( !items.classList.contains('lunch') ) {
                    items.setAttribute('hidden', true)
                } else {
                    items.removeAttribute('hidden')
                }
            } else if( navBut.classList.contains('shakes') ) {
                if( !items.classList.contains('shakes') ) {
                    items.setAttribute('hidden', true)
                } else {
                    items.removeAttribute('hidden')
                }
            } else if( navBut.classList.contains('dinner') ) {
                if( !items.classList.contains('dinner') ) {
                    items.setAttribute('hidden', true)
                } else {
                    items.removeAttribute('hidden')
                }
            } else {
                if( !items.classList.contains('all') ) {
                    items.removeAttribute('hidden')
                }
            }
        })
        
    })
})
