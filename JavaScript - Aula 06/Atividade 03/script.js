function calcularCirculo(raio) {
    const area = Math.PI * Math.pow(raio, 2);
    const perimetro = 2 * Math.PI * raio;
    return {
        area: area,
        perimetro: perimetro
    };
}
const raio = 5;
const resultado = calcularCirculo(raio);
console.log(`Para um círculo com raio de ${raio}:`);
console.log(`Área: ${resultado.area.toFixed(2)}`);
console.log(`Perímetro: ${resultado.perimetro.toFixed(2)}`);
