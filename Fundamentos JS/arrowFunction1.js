let dobro = function (a) {

    return 2 * a

}

dobro = (a) => {

    return 2 * a

}


dobro = a => 2 * a // return implicito

console.log(dobro(Math.PI))



let ola = function () {

    return 'Olá'
}

ola = () => {

    return 'Olá'
}

ola = () => 'Olá' // return implicito


console.log(ola())

const oi = () => 'Hello guyz'
console.log(oi())
