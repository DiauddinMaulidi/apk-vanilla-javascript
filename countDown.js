const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

let giveAway = document.querySelector('.container .content .content-item .title h3')
let itemTime = document.querySelectorAll('.container .content .content-item .time ul li p')
// let day = document.querySelector('.container .content .content-item .time ul li .day')
// let hour = document.querySelector('.container .content .content-item .time ul li .hour')
// let min = document.querySelector('.container .content .content-item .time ul li .min')
// let sec = document.querySelector('.container .content .content-item .time ul li .sec')

window.addEventListener('DOMContentLoaded', function() {
    let contentTimer = setInterval(() => {
        let thn = new Date().getFullYear()
        let bln = new Date().getMonth()
        let tgl = new Date().getDate()
        
        let future = new Date(thn, bln, tgl + 6, 11, 30, 0)
        let thnDepan = future.getFullYear()
        let blnDepan = months[bln]
        let tglDepan = future.getDate()
        let hariDepan = weekdays[future.getDay()]
        let hoursDepan = future.getHours()
        let minsDepan = future.getMinutes()

        giveAway.textContent = `Giveaway Ends On ${hariDepan}, ${tglDepan} ${blnDepan} ${thnDepan} ${hoursDepan}:${minsDepan}am`
        // console.log(future.getTime());

        // waktu saat ini
        let now = new Date().getTime()
        // waktu yang dibutuhkan
        let selisih = future - now
        // 1s = 1000ms
        // 1m = 60s
        // 1h = 60m
        // 1d = 24h
        let oneDay = 1000 * 60 * 60 * 24
        let oneHour = 1000 * 60 * 60
        let oneMinute = 1000 * 60
        
        let days = Math.floor(selisih / oneDay)
        let hours = Math.floor((selisih % oneDay) / oneHour)
        let minutes = Math.floor((selisih % oneHour) / oneMinute);
        let seconds = Math.floor((selisih % oneMinute) / 1000);

        let values = [days, hours, minutes, seconds]
        let format = item => {
            if( item < 10 ) {
                item = `0${item}`
            }
            return item
        }

        itemTime.forEach((result, index) => {
            result.innerHTML = format(values[index])
        })
    
        // day.innerHTML = days
        // hour.innerHTML = hours
        // min.innerHTML = minutes
        // sec.innerHTML = seconds
        
        if( selisih < 0 ) {
            clearInterval(contentTimer)
            giveAway.innerHTML = "EXPIRED"
        }
        
    }, 10);
})
