//Desconstruir Objeto: 

let pessoa = {
    nome: 'João',
    cargo: 'Programador',
    idade: 50
}

let nomeQualquer = 'Pedro'

const {nome:nomePessoa, cargo, idade} = pessoa

console.log(cargo + nomePessoa + idade)


//Desconstruir Array: 

let nomes = ['João', 'Paulo', 'Lucas']

let { 0:primeiroNome , 2:lucas , 1:segundoNome} = nomes

console.log(lucas + primeiroNome + segundoNome)

//Ou

let [nomeUm, nomeDois] = nomes

console.log(nomeUm + nomeDois)