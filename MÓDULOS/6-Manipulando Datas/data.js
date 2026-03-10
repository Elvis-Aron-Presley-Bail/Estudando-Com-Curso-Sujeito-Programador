var data = new Date()

var diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

document.write(diasDaSemana[data.getDay()])

console.log(data.getHours())
console.log(data.getMinutes())
console.log(data.getSeconds())
console.log(data.getMilliseconds())
console.log(data.getDay())

var novaData = new Date("March 10, 2026")

console.log(novaData)
console.log(Date.parse(novaData)) //Transforma a date em milisegundos

console.log(novaData.getDate()) //dia do mes
console.log(novaData.getMonth()) //mes
console.log(novaData.getDay()) //dia da semana em numero
console.log(novaData.getFullYear()) //ano

console.log(data.getDate()+ '/' + (data.getMonth()+1) + '/' + data.getFullYear())

var somandoDia = data.setDate(data.getDate()+5) //retorna milisegundo
console.log(somandoDia)

var somandoMes = data.setMonth(data.getMonth()+10) //retorna milisegundo
console.log(somandoMes)
