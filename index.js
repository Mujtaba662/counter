let count = 0

function countUP() {
    count = count + 1
    let counter = document.getElementById('counter')
    counter.innerText = count
}
function countDOWN() {
    count = count -1 
    let counter = document.getElementById('counter')
    counter.innerText = count
}
function deleteALL() {
    count = count - count
    let counter = document.getElementById('counter')
    counter.innerText = count
}