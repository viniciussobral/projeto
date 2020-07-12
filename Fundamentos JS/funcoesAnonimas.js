const soma = function (x, y) {

    return x + y
}


const imprimirResultado = function (a, b, operacao = soma) {

    console.log(operacao(a, b));
}

imprimirResultado(10, 30);

imprimirResultado(4, 16, soma)

// aqui eu passo uma função anonima e eu passo invés de uma soma eu passo uma subtração
console.log("");
console.log("Subtração");
imprimirResultado(3, 17, function (x, y) {

    return x - y
})

// aqui eu passo uma função anonima e eu passo invés de uma soma eu passo uma multiplicação
console.log("");
console.log("Multiplicação");
imprimirResultado(2, 5, function (x, y) {
    return x * y;
})

// aqui eu passo uma função anonima e eu passo invés de uma soma eu passo uma divisão só que através do Arrow
console.log("");
console.log("Divisão");
imprimirResultado(9, 3, (x, y) => x / y)

console.log("");
// aqui tbm é uma função anonima dentro de um contexto de um objeto
const pessoa = {

    falar: function () {

        console.log("Oiee");

    }
}


