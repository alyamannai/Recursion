function fibs(n) {
    const fibonacciSequence = [];
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        fibonacciSequence.push(a);
        const nextFib = a + b;
        a = b;
        b = nextFib;
    }

    return fibonacciSequence;
}

const result = fibs(8);
console.log(result); 

function fibsRec(n, sequence = [], a = 0, b = 1) {
    if (n <= 0) {
        return sequence;
    }

    sequence.push(a);
    return fibsRec(n - 1, sequence, b, a + b);
}

const resultRec = fibsRec(8);
console.log(resultRec);
