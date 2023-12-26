/*
let num = [2, 4, 1]
num[3] = 12
num.push(23)
num.sort()
console.log(`${num} tem ${num.length} números`)
*/
/*
let num = [ 3, 2, 7, 4]
num.sort()

let pos = 0
while (pos < num.length) {
    console.log(num[pos])
    pos += 1
}
*/
let num = [2, 4, 1, 8, 0]
num.sort()
for (let pos = 0; pos < num.length; pos ++) {
    console.log(num[pos])
}
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
