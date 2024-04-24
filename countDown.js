let giveAway = document.querySelector('.container .content .content-item .title h3 span')
let day = document.querySelector('.container .content .content-item .time ul li .day')
let hour = document.querySelector('.container .content .content-item .time ul li .hour')
let min = document.querySelector('.container .content .content-item .time ul li .min')
let sec = document.querySelector('.container .content .content-item .time ul li .sec')

let tngglGiveAway = new Date("30 april 2024 11:30:00").getTime()

let contentTimer = setInterval(() => {
    let now = new Date().getTime()

    let selisih = tngglGiveAway - now
    
    let days = Math.floor(selisih / (1000 * 60 * 60 * 24))
    let hours = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((selisih % (1000 * 60)) / 1000);
    
    day.innerHTML = days
    hour.innerHTML = hours
    min.innerHTML = minutes
    sec.innerHTML = seconds

    if( selisih < 0 ) {
        clearInterval(contentTimer)
        day.innerHTML = "EXPIRED"
    }
    // console.log(selisih);
    
}, 500);