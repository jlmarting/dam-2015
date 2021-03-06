    function getPrimes(max) {
        var sieve = [],
            i, j, primes = [];
        for (i = 2; i <= max; ++i) {
            if (!sieve[i]) {
                // i has not been marked -- it is prime
                primes.push(i);
                for (j = i << 1; j <= max; j += i) {
                    sieve[j] = true;
                }
            }
        }
        return primes;
    }

    this.addEventListener('message', function(e){
        console.log(e.data);
        var primes = getPrimes(e.data);
        console.log(primes);
        this.postMessage(primes);
    });
