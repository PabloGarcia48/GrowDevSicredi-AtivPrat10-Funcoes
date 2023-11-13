/*
8. Crie uma função chamada mostrarDobro(num), que recebe um
parâmetro sendo um número inteiro. Esta função será chamada ao
abrir a página e mostrará um alerta com o resultado. Exemplo: “O
dobro do número 5 é 10.”
*/

const num = Number(prompt("Digite um número para ver o seu dobro"))

function mostrarDobro(num) {
    const dobro = num * 2
    return dobro
}

document.write(`O dobro do número ${num} é ${mostrarDobro(num)}`)
alert(`O dobro do número ${num} é ${mostrarDobro(num)}`)