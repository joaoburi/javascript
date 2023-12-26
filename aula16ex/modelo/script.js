let num = document.getElementById("txt1")
// ou let num = document.querySelector('input#')
let lista = document.getElementById("txt2")
// ou let lista = document.querySelector('select#lista')
let res = document.getElementById("res")
// ou let res = document.querySelector('div#res')
let valores = []

// Verificar se o número está entre 0 e 100
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// Verificar se o número está na lista
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou ja encontrado na lista.')
    }
    num.value = '' // apagar o número dentro da caixa depois de clicar em adicionar
    num.focus() // para não precisar clicar na caixa para adicionar um numero
}

function finalizar() {
    
    let maior = Math.max.apply(null, valores)
    let menor = Math.min.apply(null, valores)
    let soma = 0
    let tot = valores.length
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i]
    }
    let media = soma / valores.length
    
    /*
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for(let pos in valores) {
    soma += valores[pos]
    if (valores[pos] > maior)
        maior = valores[pos]
    if (valores[pos] < menor)
        menor = valores[pos]
    }
    media = soma / tot
    */
    
    
    res.innerHTML += `<p>Ao todo temos ${tot} cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
}
