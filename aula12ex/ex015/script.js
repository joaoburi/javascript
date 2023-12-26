function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 18) {
                //criança
                img.src = ('foto-menino.png')
            } else if (idade < 50) {
                //adulto
                img.src = ('foto-homem.png')
            } else {
                //idoso
                img.src = ('foto-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 18) {
                //criança
                img.src = ('foto-menina.png')
            } else if (idade < 50) {
                //adulto
                img.src = ('foto-mulher.png')
            } else {
                //idoso
                img.src = ('foto-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        
        res.appendChild(img)
    }
}