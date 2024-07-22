const container = document.querySelector(".container");

const size = prompt("Enter size number (Max: 100)")

for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cells");
    

    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "blue"
    })

    container.appendChild(cell);
}