function contarRepeticiones() {
    const sequence = document.getElementById('sequenceInput').value.split(',').map(Number);
    const number = parseInt(document.getElementById('numberToFind').value);
    let count = 0;

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === number) {
            count++;
        }
    }

    document.getElementById('patternResult').textContent = `El número ${number} se repite ${count} veces en la secuencia.`;
}

function calculateSum() {
    const number = parseInt(document.getElementById('number').value);
    if (number <= 0 || isNaN(number)) {
        document.getElementById('result').innerText = "Por favor ingrese un número entero positivo.";
        return;
    }

    let sum = 0;
    let sumProcess = '';

    for (let i = 1; i <= number; i++) {
        sum += i;
        sumProcess += (i === 1) ? i : '+' + i;
    }

    document.getElementById('result').innerText = `La suma de todos los números naturales hasta ${number} es ${sumProcess} = ${sum}.`;
}
function calculateFactorial() {
    const number = parseInt(document.getElementById('factorialInput').value);
    if (isNaN(number) || number < 0) {
        document.getElementById('factorialResult').textContent = 'Por favor, ingresa un número entero positivo.';
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    document.getElementById('factorialResult').textContent = `El factorial de ${number} es ${factorial}.`;

    // Explicación del cálculo
    document.getElementById('factorialResult').insertAdjacentHTML('beforeend', `<br>Explicación: <br> Para calcular ${number}!, multiplicamos ${number} por ${number-1}, por ${number-2}, hasta llegar a 1. <br> Ejemplo: ${number}! = ${Array.from({length: number}, (_, i) => i + 1).reverse().join(' x ')} = ${factorial}.`);
}

function findEvenOddNumbers() {
    const start = parseInt(document.getElementById('startNumber').value);
    const end = parseInt(document.getElementById('endNumber').value);

    if (isNaN(start) || isNaN(end) || start > end) {
        document.getElementById('parityResult').textContent = 'Por favor, ingresa un rango válido.';
        return;
    }

    const evens = [];
    const odds = [];

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            evens.push(i);
        } else {
            odds.push(i);
        }
    }

    document.getElementById('parityResult').innerHTML = `
        Números pares: ${evens.join(', ')}<br>
        Números impares: ${odds.join(', ')}
    `;
}

function generateTable() {
    const number = parseInt(document.getElementById('tableNumber').value);
    const tableType = document.getElementById('tableType').value;
    const resultDiv = document.getElementById('tableResult');

    if (isNaN(number) || number < 1) {
        resultDiv.textContent = 'Por favor, ingresa un número entero positivo.';
        return;
    }

    let result = '';

    for (let i = 1; i <= 10; i++) {
        if (tableType === '*') {
            result += `${number} x ${i} = ${number * i}<br>`;
        } else if (tableType === '+') {
            result += `${number} + ${i} = ${number + i}<br>`;
        }
    }

    resultDiv.innerHTML = result;
}
function generateFibonacci() {
    const n = parseInt(document.getElementById('fibonacciInput').value);
    const resultDiv = document.getElementById('fibonacciResult');

    if (isNaN(n) || n < 1) {
        resultDiv.textContent = 'Por favor, ingresa un número entero positivo.';
        return;
    }

    let a = 0, b = 1, sequence = [];

    for (let i = 0; i < n; i++) {
        sequence.push(a);
        let next = a + b;
        a = b;
        b = next;
    }

    resultDiv.textContent = `Secuencia de Fibonacci: ${sequence.join(', ')}`;
}
function checkPrimes() {
    const input = document.getElementById('primeInputs').value;
    const numbers = input.split(',').map(num => parseInt(num.trim()));
    const resultDiv = document.getElementById('primeResults');
    let results = '';

    numbers.forEach(number => {
        if (isNaN(number) || number < 1) {
            results += `El valor "${number}" no es un número entero positivo.<br>`;
            return;
        }

        let isPrime = true;

        if (number <= 1) {
            isPrime = false;
        } else {
            for (let i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        results += isPrime ? `${number} es un número primo.<br>` : `${number} no es un número primo.<br>`;
    });

    resultDiv.innerHTML = results;
}

function checkPerfects() {
    const input = document.getElementById('perfectInputs').value;
    const numbers = input.split(',').map(num => parseInt(num.trim()));
    const resultDiv = document.getElementById('perfectResults');
    let results = '';

    numbers.forEach(number => {
        if (isNaN(number) || number < 1) {
            results += `El valor "${number}" no es un número entero positivo.<br>`;
            return;
        }

        let sum = 0;

        for (let i = 1; i < number; i++) {
            if (number % i === 0) {
                sum += i;
            }
        }

        results += sum === number ? `${number} es un número perfecto.<br>` : `${number} no es un número perfecto.<br>`;
    });

    resultDiv.innerHTML = results;
}