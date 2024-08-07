const calculadora = function(numero1, numero2, operacao) {
    switch (operacao) {
        case 'adição':
        case '+':
            return numero1 + numero2;
        case 'subtração':
        case '-':
            return numero1 - numero2;
        case 'multiplicação':
        case '*':
            return numero1 * numero2;
        case 'divisão':
        case '/':
            return numero2 !== 0 ? numero1 / numero2 : 'Erro: Divisão por zero';
        default:
            return 'Operação inválida';
    }
};
const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));
const operacao = prompt("Digite a operação (adição, subtração, multiplicação, divisão):");

const resultado = calculadora(numero1, numero2, operacao);
console.log(`O resultado da operação é: ${resultado}`);
