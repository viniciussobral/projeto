//par nome/ valor 
const saudacao = 'Opa' // contexto léxico 1

function exec() {

    const saudacao = 'falaaa' // contexto léxico 2 dentro de uma função eu posso colocar o mesmo nome ele funciona por estar em contextos diferentes
    return saudacao

}

// objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Vinicius',
    idade: 19,
    peso: 60,
    endereco: {
        logradouro: 'Rua João Rojas',
        numero: 145,
        cep: 45638912

    }

}


console.log(saudacao)
console.log(exec())
console.log(cliente)



