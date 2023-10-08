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
console.log(result); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
