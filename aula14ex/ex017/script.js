//1
function gerar() {
    let n = document.getElementById('txtn') 
    let tab = document.getElementById('seltab')
    if (n.value == 0) {
        window.alert('Por, favor. Digite um número!')
    } else {
        let num = Number(n.value)
        tab.innerHTML = ''
        
        for (let c = 1; c <= 10; c+=1) {
            let item = document.createElement('option')
            item.text += `${num} x ${c} = ${num*c} `
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
        
}