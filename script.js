document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container");

    for (let i = 0; i < 16 * 16; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cells");
        

        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "blue"
        })

        container.appendChild(cell);
    }
});
