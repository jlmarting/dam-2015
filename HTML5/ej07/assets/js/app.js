window.onload = function() {

    var input = document.getElementById('num');
    var btn = document.getElementById('calc');
    var result = document.getElementById('resultados');

    var worker = new Worker('assets/js/primes.js');


    btn.addEventListener('click', function(e) {
        e.preventDefault();
        var num = input.value;

        worker.postMessage(num);

    });

    worker.addEventListener('message', function(e) {
        var primes = e.data;
        result.innerHTML = primes.join(' ');
    });

};
