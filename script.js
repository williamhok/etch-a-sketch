const container = document.querySelector(".container");
const changeSize = document.querySelector(".change-size")

function board(size) {
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cells");
        
    
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "blue"
        })
    
        container.appendChild(cell);
    }
}

board(16)

changeSize.addEventListener("click", () => {
    container.innerHTML = ""
    let size = prompt("Enter size number (Max: 100)")

    while (isNaN(size) || size > 100 || size < 1) {
        alert("Error: valid input is between 1 and 100")
        size = prompt("Enter size number (Max: 100)")
    }

    board(size)
})