var agora = new Date()
var hora = agora.getHours()
if (hora < 6) {
    console.log('Madrugada!')
} else if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora < 19) {
    console.log('Boa Tarde!')
} else if (hora < 24) {
    console.log('Boa Noite!')
} else {
    console.log('Horário Inválido')
}