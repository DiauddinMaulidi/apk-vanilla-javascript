let switchBtn = document.querySelector('.switch-btn');
let videoPause = document.querySelector('.video-container');

switchBtn.addEventListener('click', function() {
    if( !switchBtn.classList.contains('slide') ) {
        switchBtn.classList.add('slide')
        videoPause.pause()
    } else {
        switchBtn.classList.remove('slide')
        videoPause.play()
    }
})



