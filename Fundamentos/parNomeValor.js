// Par ou chave nome/valor
const saudacao = 'Ola' //Contexto léxico 1
function exec () {
    const saudacao  = 'Oi' //Contexto léxico 2
    return saudacao
}

//Objetos são grupos  aninhados de pares chave/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro:'Rua de exemplo',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)