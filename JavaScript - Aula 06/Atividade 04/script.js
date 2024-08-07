function ePrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return false;
    }
    return true;
}
const numero = parseInt(prompt("Digite um número:"));
if (ePrimo(numero)) {
    console.log(`${numero} é um número primo.`);
} else {
    console.log(`${numero} não é um número primo.`);
}
