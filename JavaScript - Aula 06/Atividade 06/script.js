const somar = function(a, b) {
    return a + b;
};
const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));

const resultado = somar(numero1, numero2);
console.log(`A soma de ${numero1} e ${numero2} é ${resultado}`);
