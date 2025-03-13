const container = document.querySelector(".container")
const board = document.querySelector(".board")

for (i = 0; i < 16; i++) {
    let divs = document.createElement("div")
    divs.className = "square"
    board.appendChild(divs)
}