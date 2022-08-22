let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add() {
    count = num1 + num2
    let sum = document.getElementById('sum')
    sum.textContent += count + " "
}
function min() {
    count = num1 - num2
    let sum = document.getElementById('sum')
    sum.textContent += count + " "
}
function mul() {
    count = num1 * num2
    let sum = document.getElementById('sum')
    sum.textContent += count + " "
}
function dv() {
    count = num1 / num2
    let sum = document.getElementById('sum')
    sum.textContent += count + " "
}
function del() {
    count = "Sum: "
    let sum = document.getElementById('sum')
    sum.textContent = count
}

