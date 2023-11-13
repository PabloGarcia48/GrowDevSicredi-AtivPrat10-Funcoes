/*
4. Crie uma função que recebe por parâmetro o tempo de duração de
uma fábrica expressa em segundos e retorna esse tempo em horas,
minutos e segundos.
Ex:
Entrada: 3672
Saída: 1:1:12
*/

const tempoSeg = Number(prompt("Digite um valor em segundos, para converter em Hora: Minuto: Segundo"))

function transformTime(tempoSeg) {
    const tempoHora = Math.floor(tempoSeg / 3600)
    const tempoMin = Math.floor((tempoSeg - (3600 * tempoHora)) / 60)
    const tempoSeg2 = Math.floor((tempoSeg - (3600 * tempoHora) - (60 * tempoMin)))

    return `${tempoHora}h : ${tempoMin}min : ${tempoSeg2}seg`
}

document.write(`${tempoSeg} segundos = ${transformTime(tempoSeg)}`)

