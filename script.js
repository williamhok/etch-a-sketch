const container = document.querySelector(".container")
const board = document.querySelector(".board")
let size = 16

function createBoard(size) {
    board.innerHTML = ""
    for (i = 0; i < size * size; i++) {
        let divs = document.createElement("div")
        divs.className = "square"
        board.appendChild(divs)
    }

    const squares = document.querySelectorAll(".square")
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "blue"
        })
    })
}

createBoard(size)

const changeSize = document.querySelector(".change-size")


changeSize.addEventListener("click", () => {
    size = prompt("Enter size number (max: 100)")
    if (size <= 100) {
        createBoard(size)
    } else
        alert("Error")
})