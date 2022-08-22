let count = 0
let gettingDATA = JSON.parse(localStorage.getItem("count"))
if (gettingDATA) {
    let previousENTRY = document.getElementById("save")
    previousENTRY.textContent += gettingDATA
}
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
    localStorage.setItem("count", JSON.stringify(count))
    save.innerText += " " + count
    count = 0
    let counter = document.getElementById('counter')
    counter.innerText = 0
}
function deleteENTRIES() {
    let save = document.getElementById('save')
    save.innerText = "Previous enteries: "
}

// JUST FOR PRACTICE I WROTE THE WHOLE CODE AGAIN WITHOUT SEEING OTHER WISE THE CODE IS SAME







// let count = 0 
// function countUP() {
//     count += 1
//     let counter = document.getElementById('counter')
//     counter.innerHTML = count
// }
// function countDOWN() {
//     count -= 1
//     let counter = document.getElementById('counter')
//     counter.innerHTML = count
// }
// function deleteALL() {
//     count = count - count
//     let counter = document.getElementById('counter')
//     counter.innerHTML = count
// }
// function saveCOUNT() {
//     let save = document.getElementById('save')
//     save.innerHTML += " " + count
//     count = 0 
//     let counter = document.getElementById('counter')
//     counter.innerText = 0
// }
// function deleteENTRIES() {
//     let save = document.getElementById('save')
//     save.innerHTML = "Previous entries: "
// }
