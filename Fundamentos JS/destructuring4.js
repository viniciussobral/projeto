function rand([min = 0, max = 1000]) {

    if (min > max) {

        [min, max] = [max, min]

    }

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)

}

const obj = [38, 95]
console.log("Números aleatórios de 38 á 95: " + rand(obj)) // passei dentro de uma variavel os valores 38 e 95
console.log(rand([50, 20])) // aqui ele faz a troca do número maior para o número menor ele entra no if
console.log(rand([100])) // aqui ele pegar o min pois é a primeira posição do Array
console.log(rand([, 15])) // aqui ele deixa o min como 0 pois não tem nada, e seta o 10 como max
console.log(rand([])) // aqui ele executa default pois ele faz exatamente o que eu passei na minha função
// console.log(rand()) // aqui vai dar problema pois eu passo um array e não colequei os cochetes



