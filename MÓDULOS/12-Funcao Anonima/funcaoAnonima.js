//Funcao Normal

function somar(a, b) {
    let total = a + b
    return console.log(total)
}

somar(10, 12)


//Funcao Anonima

let subtrair = (valor1, valor2) => {
    let total = valor1 - valor2
    return console.log(total)
}

subtrair(23,11)

let numeros = [10, 12, 4, 35]

numeros.map((numero) => {
    console.log(numero)
})