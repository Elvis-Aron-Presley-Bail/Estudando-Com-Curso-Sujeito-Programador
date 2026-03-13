/*
let lista = ['Computador', 'Telefone', 'Mouse', 'Teclado']

console.log(lista)
console.log(lista.length)
lista.splice(2, 1)
console.log(lista)

if(lista.includes('Teclado')) {
    console.log('Esse produto Existe! Teclado')
} else {
    console.log('Esse produto não existe')
}

lista.splice(1, 1)

console.log(lista) 
*/


//

/*
let numeros = [1, 3, 5, 7, 0, 9]

console.log(numeros)

let ordem = numeros.sort((a, b) => a - b)

console.log(ordem)

numeros.splice(0, 1)

console.log(numeros)

let decrescente = numeros.sort((a, b) => -a - b)

console.log(decrescente)
*/

//

let data = new Date()

let dia = data.getDate()
let mes = (data.getMonth()) + 1
let ano = data.getFullYear()

let hoje = `${dia}/${mes}/${ano}`

console.log(hoje)