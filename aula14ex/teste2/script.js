//2
function gerar() {
    let num = window.document.getElementById("txtn")
    let tab = window.document.getElementById("seltab")
    let n = Number(num.value)
    tab.innerHTML = ''



   
    for (let c = 1; c <= 10; c+=1) {
        let item = window.document.createElement('option')
        item.text += `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)    
    }
    
}


