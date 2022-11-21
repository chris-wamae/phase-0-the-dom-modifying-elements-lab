// Write your code here!
const main = document.getElementById("main")
main.remove()

const newHeader = document.createElement("h1")
document.body.append(newHeader)
newHeader.id = "victory"
newHeader.textContent = "Chris is the champion"