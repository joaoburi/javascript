function contar() {
    var ini = window.document.getElementById("txti")
    var fim = window.document.getElementById("txtf")
    var pas = window.document.getElementById("txtp")
    var res = window.document.getElementById("res")

    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(pas.value)
    
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('Erro. Faltam dados!')
    } else {
        while (i < f) {
            i += p
            res.innerHTML += `${i} \u{1F449} `
        }
        res.innerHTML += `\u{1F3F4}`
    }
    
}



