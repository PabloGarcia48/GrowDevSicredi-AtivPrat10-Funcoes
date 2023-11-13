/*
7. Crie uma função chamada mostrarMensagem() que não tenha
parâmetro. Esta função será chamada ao abrir a página e mostrará
uma mensagem no console.log() informando “Acesso à aplicação
NomeAplicação” e um alerta informando “Bem vindo à aplicação
NomeApliação”. Sendo que o nome da aplicação deve ser salvo em
uma variável para mostrar nas mensagens.
*/

const aplicacao = "PabloNaSicrediPioneira"
function mostrarMensagem() {
    console.log(`Acesso à aplicação » ${aplicacao}`);
    alert(`Acesso à aplicação » ${aplicacao}`)
}
mostrarMensagem()

