let numeros = [5, 10, 7]

let total = numeros.reduce((acumulador, valor, indice, original) => {
    console.log(`Acumulador: ${acumulador}`)
    console.log(`Valor: ${valor}`)
    //console.log(`Indice: ${indice}`)
    //console.log(`Original: ${original}`)
    console.log('================================')

    return acumulador += valor
})

console.log(total)


//Teste: 

let todosNumeros = [10, 30, 50, 10]

let soma = todosNumeros.reduce((acumular, numero) => {
    return acumular += numero
})

console.log(soma)