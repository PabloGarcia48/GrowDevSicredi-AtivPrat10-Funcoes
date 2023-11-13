/*
5. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
é um valor perfeito ou falso se não for. Um valor é dito perfeito
quando ele é igual a soma dos seus divisores excetuando ele
próprio.
Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores
*/

const valor = Number(prompt("Digite um número para verificar se ele é perfeito"))

function perfect(valor) {
    if (valor <= 1)
        return false;

    let somaDivisores = 1;

    for (let i = 2; i < valor; i++) {
        if (valor % i === 0)
            somaDivisores += i;
    }
    return somaDivisores === valor;
}

document.write(`${valor} é um número perfeito: ${perfect(valor)}`)