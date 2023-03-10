
    
    // EXO : 8
      function sommenombrespremiers(a, b) {
        function isPrime(n) {
          for(let i = 2; i < n; i++) {
              if(n % i === 0) return false;
          }
          return n > 1;
        }
        if(isPrime(a) && isPrime(b)) {
          return a + b;
        } else {
          return false;
        }
      }

      console.log(sommenombrespremiers(5, 6));

