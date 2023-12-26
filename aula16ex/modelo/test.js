let numeros = [7, 6, 9, 1, 2]
let maior = Math.max.apply(null, numeros)
let menor = Math.min.apply(null, numeros)
let soma = 0

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]
}
    
let media = soma / numeros.length
console.log(`Ao todo temos ${numeros.length} cadastrados.`)
console.log(`O maior valor informado foi ${maior}.`)
console.log(`O menor valor informado foi ${menor}.`)
console.log(`Somando todos os valores, temos ${soma}.`)
console.log(`A média dos valores digitados é ${media}.`)
