var peso
var altura
var imc
var resultado

function calcular(event) {
    event.preventDefault()

    peso = document.querySelector("#peso").value 
    altura = document.querySelector("#altura").value 

    imc = (peso / (altura * altura)).toFixed(2)

    resultado = document.querySelector("#resultado")

    if(imc < 17) {
        resultado.textContent = 'IMC: ' + imc + '|| Muito abaixo do peso'
    } else if(imc >= 17 && imc <= 18.49) {
        resultado.textContent = 'IMC: ' + imc + '|| Abaixo do peso'
    } else if(imc >= 18.5 && imc <= 24.99) {
        resultado.textContent = 'IMC: ' + imc + '|| Peso normal'
    } else {
        resultado.textContent = 'IMC: ' + imc + '|| Acima do peso'
    }

    document.querySelector("#peso").value = ''
    document.querySelector("#altura").value = ''

}   