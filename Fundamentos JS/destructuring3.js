function rand({ min = 0, max = 1000 }) {

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 25, min: 15 } // aqui eu passo como parametro o max como 25  e o min 15
console.log(rand(obj)) // e passo o objeto para apresentar nesse range
console.log(rand({ min: 90 })) // dessa forma ele vai gerar números aletórios entre 90 e 1000 pelo fato de eu ter colocado o 1000 como max e desconsiderando o
// o fato que eu setei o min como 0 
console.log(rand({})) // dessa forma ele vai gerar números aletórios entra 0 e 1000 pelo fato de eu ter colocado o 1000 como max e 0 como min
console.log(rand()) // se eu não passar as chaves do parametro não vai funcionar ele espera passar um parametro pela forma que eu fiz a minha function




