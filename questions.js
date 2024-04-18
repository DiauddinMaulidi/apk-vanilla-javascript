// panggil element yang berkaitan
let buttonPlus = document.querySelectorAll('.content article button');
let questionText = document.querySelectorAll('.content article .content-question');

// nilai awal tombol atau pertanyaan yang sedang diklik atau di tampilkan
let currentQuestion = null;

// looping setiap tombol yang ada
buttonPlus.forEach(function(button) {
    // beri event ketika diklik
    button.addEventListener('click', function() {
        let nextQuestion = button.parentElement.nextElementSibling

        // cek jika pertanyan atau tombol yang akan diklik sama dengan pertanyan atau tombol saat ini dan juga pertanyan itu sedang ditampilkan
        if( nextQuestion === currentQuestion && !nextQuestion.hasAttribute('hidden') ) {
            // sembunyikan pertanyaannya
            nextQuestion.setAttribute('hidden', '')
            currentQuestion = null
        // tapi jika sebaliknya
        } else {
            // cek apakah ada pertanyaan yang sedang ditampilkan?
            if( currentQuestion !== null ) {
                // jika iya sembunyikan
                currentQuestion.setAttribute('hidden', '')
            }

            // Tampilkan elemen pertanyaan yang terkait dengan tombol yang diklik
            nextQuestion.removeAttribute('hidden')
            currentQuestion = nextQuestion
        }
    })
})