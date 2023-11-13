/*
1. Crie uma função que recebe 3 notas de um aluno por parâmetro e
uma letra. Se a letra for A a função deve calcular a média aritmética,
se for P, a média ponderada (peso: 5, 3 e 2).
*/

const notas = []
let metodoImpressao = ""

for (let i = 0; i <= 2; i++) {
    let nota = prompt(`Digite a ${i + 1}ª nota`)
    notas.push(nota)
}

const metodo = prompt(`Digite "A" = média aritmética\nDigite "P" = média ponderada`)

function media(notas, metodo) {
    const [nota1, nota2, nota3] = notas

    if (metodo === 'A') {
        return (nota1 * 1 + nota2 * 1 + nota3 * 1) / 3
    } else if (metodo === 'P') {
        return (nota1 * 5 + nota2 * 3 + nota3 * 2) / 10
    } else {
        return null
    }
}

metodo === 'A' ? metodoImpressao = "Média Aritmética" : null
metodo === 'P' ? metodoImpressao = "Média Ponderada" : null

document.write(`O valor da ${metodoImpressao} é: ${media(notas,metodo).toFixed(2)}<br>`);
document.write(`As notas digitadas foram: [${notas}]`)

