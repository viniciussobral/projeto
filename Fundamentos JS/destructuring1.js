// noo recurso do ES6 2015
let nome1 = 'Katiane'

const pessoa = {
    nome: nome1,
    idade: 18,
    endereco: {
        logradouro: 'Rua Fernandópolis Souza',
        numero: 145,
        cep: 45638912

    }

}

// verificando de que tipo é a variavel se é um objeto ou uma função
console.log(typeof pessoa)
console.log("")

const { nome, idade } = pessoa
console.log(nome, idade)
console.log("")

const { nome: n, idade: i } = pessoa
console.log(n, i)
console.log("")

// aqui eu omito para o console que se não retornar nada no objeto pessoa eu posso passar true na variavel
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)
console.log("")

// aqui eu pego de forma aninhada somente logradouro e numero
const { endereco: { logradouro: l, numero: nu } } = pessoa
console.log("logradouro = " + l, " número = " + nu)
console.log("")

// desse modo eu mostro tudo o que está dentro de endereco
const { endereco } = pessoa
console.log(endereco)
console.log("")

console.log(pessoa)

