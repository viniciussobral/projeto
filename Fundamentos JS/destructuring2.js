const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 8, 15, 20]
console.log(n1, n3, n5, n6)

// no elemento n5 ela não tem valor no array então ele vai vir undefined já o n6 eu setei o número 0 então 
// na exibição das variaveis vai aparecer o n1 com o valor 10, o n3, com o valor 15 o, n5 undefined e o n6 com 0

const [, [, nota]] = [[, 7, 5], [9, 8, 20]]
console.log(nota)
