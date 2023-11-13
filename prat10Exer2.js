/*
2. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
for ímpar ou falso se for par.
*/

const valor = Number(prompt("Digite um número para saber se ele é Impar"))

function parImpar(valor) {
   return valor % 2 !== 0
}

document.write(`O número ${valor} é impar: ${parImpar(valor)}`);
