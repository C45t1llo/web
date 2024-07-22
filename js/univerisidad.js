let display = document.getElementById('display');
let currentValue = '';
let operator = '';
let firstValue = '';

function appendNumber(number) {
    if (number === '.' && currentValue.includes('.')) return;
    currentValue += number;
    updateDisplay();
}

function appendOperator(op) {
    if (currentValue === '' && op === '-') {
        currentValue = op; // Allow negative numbers
        updateDisplay();
        return;
    }
    if (currentValue === '') return;
    if (firstValue !== '') {
        calculate();
    }
    firstValue = currentValue;
    operator = op;
    currentValue = '';
    updateDisplay();
}

function calculate() {
    if (firstValue === '' || currentValue === '' || operator === '') return;
    let result;
    const prev = parseFloat(firstValue);
    const current = parseFloat(currentValue);
    
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    
    currentValue = result.toString();
    operator = '';
    firstValue = '';
    updateDisplay();
}

function clearDisplay() {
    currentValue = '';
    firstValue = '';
    operator = '';
    updateDisplay();
}

function updateDisplay() {
    display.value = currentValue || '0';
}


function convertBinaryToDecimal() {
    const binaryInput = document.getElementById('binaryToDecimalInput').value;
    if (/^[01]+$/.test(binaryInput)) { // Validates binary number
        const decimalValue = parseInt(binaryInput, 2);
        document.getElementById('binaryToDecimalResult').textContent = `Decimal: ${decimalValue}`;
    } else {
        document.getElementById('binaryToDecimalResult').textContent = 'Por favor, ingresa un número binario válido.';
    }
}

function convertDecimalToBinary() {
    const decimalInput = document.getElementById('decimalToBinaryInput').value;
    if (/^\d+$/.test(decimalInput)) { // Validates decimal number
        const binaryValue = parseInt(decimalInput, 10).toString(2);
        document.getElementById('decimalToBinaryResult').textContent = `Binario: ${binaryValue}`;
    } else {
        document.getElementById('decimalToBinaryResult').textContent = 'Por favor, ingresa un número decimal válido.';
    }
}

function convertBinaryToHex() {
    const binaryInput = document.getElementById('binaryToHexInput').value;
    if (/^[01]+$/.test(binaryInput)) { // Validates binary number
        const hexValue = parseInt(binaryInput, 2).toString(16).toUpperCase();
        document.getElementById('binaryToHexResult').textContent = `Hexadecimal: ${hexValue}`;
    } else {
        document.getElementById('binaryToHexResult').textContent = 'Por favor, ingresa un número binario válido.';
    }
}

function convertHexToBinary() {
    const hexInput = document.getElementById('hexToBinaryInput').value;
    if (/^[0-9A-Fa-f]+$/.test(hexInput)) { // Validates hexadecimal number
        const binaryValue = parseInt(hexInput, 16).toString(2);
        document.getElementById('hexToBinaryResult').textContent = `Binario: ${binaryValue}`;
    } else {
        document.getElementById('hexToBinaryResult').textContent = 'Por favor, ingresa un número hexadecimal válido.';
    }
}

function analyzeText() {
    const text = document.getElementById('textInput').value;
    const characters = text.length;
    const vowels = (text.match(/[aeiouáéíóúü]/gi) || []).length;
    const signs = (text.match(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g) || []).length;
    const spaces = (text.match(/\s/g) || []).length;
    const words = (text.match(/\b\S+\b/g) || []).length;
    const digits = (text.match(/\d/g) || []).length;

    document.getElementById('textAnalysisResult').innerHTML = `
        Caracteres: ${characters}<br>
        Vocales: ${vowels}<br>
        Signos: ${signs}<br>
        Espacios: ${spaces}<br>
        Palabras: ${words}<br>
        Dígitos: ${digits}
    `;
}

function reverseString() {
    const str = document.getElementById('stringInput').value;
    const reversed = str.split('').reverse().join('');
    document.getElementById('reversedStringResult').textContent = `Invertido: ${reversed}`;
}

function comparePhrases() {
    const phrase1 = document.getElementById('phrase1').value;
    const phrase2 = document.getElementById('phrase2').value;
    const words1 = (phrase1.match(/\b\S+\b/g) || []).length;
    const words2 = (phrase2.match(/\b\S+\b/g) || []).length;

    let result;
    if (words1 > words2) {
        result = 'La primera frase tiene más palabras.';
    } else if (words1 < words2) {
        result = 'La segunda frase tiene más palabras.';
    } else {
        result = 'Ambas frases tienen el mismo número de palabras.';
    }

    document.getElementById('phraseComparisonResult').textContent = result;
}
function calcularResultados() {
    // Obtener el arreglo de números desde el input
    let inputArray = document.getElementById('inputArray').value;
    
    // Convertir el input en un arreglo de números
    let numbers = inputArray.split(',').map(num => parseInt(num.trim()));
    
    // Calcular números primos
    let primeNumbers = obtenerPrimos(numbers);
    mostrarResultados('primeNumbers', 'Números primos: ' + primeNumbers.join(', '));
    
    // Calcular números perfectos
    let perfectNumbers = obtenerPerfectos(numbers);
    mostrarResultados('perfectNumbers', 'Números perfectos: ' + perfectNumbers.join(', '));
    
    // Calcular promedio y moda de notas
    let notas = numbers; // Suponemos que el arreglo de números son las notas
    
    let promedio = calcularPromedio(notas);
    mostrarResultados('average', 'Promedio: ' + promedio.toFixed(2));
    
    let moda = calcularModa(notas);
    mostrarResultados('mode', 'Moda: ' + moda);
}

function obtenerPrimos(arr) {
    return arr.filter(num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
}

function obtenerPerfectos(arr) {
    return arr.filter(num => {
        if (num <= 1) return false;
        let sum = 0;
        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                sum += i;
                if (i !== 1 && i !== num / i) {
                    sum += num / i;
                }
            }
        }
        return sum === num;
    });
}

function calcularPromedio(arr) {
    let sum = arr.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
}

function calcularModa(arr) {
    let frequency = {};
    arr.forEach(num => {
        if (frequency[num]) {
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }
    });
    
    let maxFrequency = 0;
    let moda = null;
    
    for (let num in frequency) {
        if (frequency[num] > maxFrequency) {
            maxFrequency = frequency[num];
            moda = num;
        }
    }
    
    return moda;
}

function mostrarResultados(id, resultado) {
    let resultsDiv = document.getElementById(id);
    resultsDiv.innerHTML = `<div class="result-item">${resultado}</div>`;
}

