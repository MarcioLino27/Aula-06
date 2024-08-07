function contarVogais(string) {
    const vogais = "aeiouAEIOU"; 
    let contador = 0;  
    
    for (let caractere of string) {
        if (vogais.includes(caractere)) {
            contador += 1;
        }
    }
    return contador;
}

let stringUsuario = "Beterraba";
let numeroDeVogais = contarVogais(stringUsuario);
console.log(`O número de vogais na string '${stringUsuario}' é: ${numeroDeVogais}`);
