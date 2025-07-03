const container = document.querySelector(".container");

function gridCreator(numberOfSquaresPerSide){
    for (let index = 0; index < (numberOfSquaresPerSide * numberOfSquaresPerSide); index++) {
        const div = document.createElement("div");
        container.appendChild(div);
        div.classList.add(`div-${index}`);
        document.querySelector(`.div-${index}`).addEventListener("mouseover", () => {
            document.querySelector(`.div-${index}`).style.backgroundColor="red";
        });
    }
}

gridCreator(16);
let prevGridNumberOfSquaresPerSide = 16;

function deleteGrid(previousGridNumberOfSquaresPerSide){
    for (let index = 0; index < (previousGridNumberOfSquaresPerSide * previousGridNumberOfSquaresPerSide); index++) {
        const div = document.querySelector(`.div-${index}`);
        if (div){
            div.remove();
        }

    }
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let input = prompt("Type in a number between 1 and 100", 16);
    deleteGrid(prevGridNumberOfSquaresPerSide);
    if (input <= 100 && input > 0){
        gridCreator(input);
        prevGridNumberOfSquaresPerSide = input;
    }
    else {
        alert("The number provided is not acceptable.")
    }
});