/*
3. Crie uma função que recebe por parâmetro um valor inteiro e
positivo e retorne verdadeiro se o número for primo ou falso se não
for.
*/

const valor = Number(prompt("Digite um número para saber se ele é primo"))

function isPrimo(valor) {

  for (let i = 2; i < valor; i++) {
    if (valor % i === 0) {
      return false;
    }
  }
  return true;
}

document.write(`O número ${valor} é primo: ${isPrimo(valor)}`);
