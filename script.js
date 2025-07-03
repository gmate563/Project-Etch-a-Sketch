const container = document.querySelector(".container");

function gridCreator(numberOfSquaresPerSide){
    container.textContent = "";
    
    const squareSize = 640 / numberOfSquaresPerSide;

    for (let index = 0; index < (numberOfSquaresPerSide * numberOfSquaresPerSide); index++) {
        const div = document.createElement("div");
        div.classList.add("cell");
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;

        div.addEventListener("mouseover", () => {
            div.style.backgroundColor="red";
        });
        
        container.appendChild(div);

    }
}

gridCreator(16);

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let input = prompt("Type in a number between 1 and 100", 16);
    // container.textContent = "";
    if (input <= 100 && input > 0){
        gridCreator(input);
    }
    else {
        alert("The number provided is not acceptable.")
    }
});
