let count = 0

function countUP() {
    count += 1
    let counter = document.getElementById('counter')
    counter.innerText = count
}
function countDOWN() {
    count -= 1 
    let counter = document.getElementById('counter')
    counter.innerText = count
}
function deleteALL() {
    count = count - count
    let counter = document.getElementById('counter')
    counter.innerText = count
}
function saveCOUNT() {
    count = count 
    let save = document.getElementById('save')
    save.innerText += " " + count
    count = 0
    let counter = document.getElementById('counter')
    counter.innerText = 0
}
function deleteENTRIES() {
    let save = document.getElementById('save')
    save.innerText = "Previous enteries: "
}