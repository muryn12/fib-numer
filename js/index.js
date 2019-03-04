
let n = parseInt(prompt('Enter a number'));
while (Number.isNaN(n)) {
    alert('Enter a number');
   const n = parseInt(prompt('Enter a number'));
}

function fibonacciRec(n) {
    if (n === 1) {
        return 1;
    } else if (n < 1)
        return 0;

    return fibonacciRec(n - 1) + fibonacciRec(n - 2);
}

alert('number of Fibonacci is:  ' +fibonacciRec(n));


let n1 = parseFloat(prompt('Enter a number'));
while (Number.isNaN(n1)) {
    alert('Enter a number');
    const n1 = parseInt(prompt('Enter a number'));
}

function fibLoop(n1) {
    let a = 0
      , b = 1
      , result = b;
    if (n1 === 1) {
        return 1;
    } else if (n1 < 1) {
        return 0;
    }
    while (n1 > 1) {
        result = a + b;
        a = b;
        b = result;
        n1--;
    }

    return result;
}

alert('number of Fibonacci is:  ' +fibLoop(n1));


let n2 = parseInt(prompt('Enter a number'));
while (Number.isNaN(n2)) {
    alert('Enter a number');
    const n2 = parseInt(prompt('Enter a number'));
}
function fibMassif(n2) {
    let arr = [1, 1];
    let count = 2;
    if (n2 === 1) {
        return 1;
    } else if (n2 < 1) {
        return 0;
    }
    while (count <= n2) {
        let result = (arr[arr.length - 1] + (arr[arr.length - 2]));
        arr.push(result);
        count++;
    }
    return arr[n2 - 1];
}
alert('number of Fibonacci is: ' +fibMassif(n2));
