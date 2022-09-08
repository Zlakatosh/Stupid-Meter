let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    console.log(count)
}


function save() {
let save = count + " - "
saveEl.textContent += save
countEl.textContent = 0
count = 0

console.log(save)

}






