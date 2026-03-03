/*

//WHILE = ENQUANTO

document.write("<h1>WHILE</h1>")

let x = 0

while(x < 10) {
    document.write("<br> O valor de x é: " + x)

    x++
}


//FOR = PARA

document.write("<h1>FOR</h1>")

var valor = 15

for(a = 0; a < valor; a++) {
    document.write("<br> O valor de a é: " + a)
} */


//SWITCH

function pedir() {
    var numero = prompt("Insira um número entre 1 e 4: ")

    switch(Number(numero)) {
        case 1:
            alert("Você escolheu 1: Suco")
            break;
        case 2:
            alert("Você escolheu 2: Água")
            break;
        case 3:
            alert("Você escolheu 3: Sorvete")
            break;
        case 4:
            alert("Você escolheu 4: Garçom")
            break;
        default:
            alert("Encolha entre 1 a 4")
            break;
    }
}
