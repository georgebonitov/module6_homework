function isPrimeNumber(num) {
    let isPrime = true;
    if (num === 0) {
        isPrime = false;
        return isPrime;
    } else if (num === 1) {
        isPrime = false;
        return isPrime;
    } else if (num > 1000) {
        console.log('Данные неверны');
    } else {
        for (var i = 2; i < num; i++) {
            if (num%i === 0) {
                isPrime = false;
            }
        }
        return isPrime;
    }
}

let x = isPrimeNumber(5);
console.log(x);