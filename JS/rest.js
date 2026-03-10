//Operador rest

function convidados(...nomes) {
    console.log(nomes)
}

convidados('Lucas', 'Pedro', 'João')


//Ex: Sortear número

function sortearNumero(...numeros) {
    console.log(numeros)

    const sorteado = Math.floor(Math.random() * numeros.length)

    console.log(`O número sorteado foi: ${numeros[sorteado]}`)

}

sortearNumero(10, 34, 2, 7, 49, 35)
