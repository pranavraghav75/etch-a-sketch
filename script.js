let body = document.querySelector("body");
let grid = document.createElement("div");
grid.classList.add("grid");
body.appendChild(grid);

for(let i = 0; i < 256; i++){
    let square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener('mouseover', () => {
        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255);
        const b = randomBetween(0, 255);
        square.style.backgroundColor = `rgb(${r},${g},${b})`;
    });

    grid.appendChild(square);
}

const button = document.createElement("button");
button.textContent = "Click to Change Size";

button.addEventListener('click', () => {
    let size = window.prompt("What is your desired size?");
    resize(size);
});

grid.appendChild(button);

function resize(size){
    if(size > 100){
        let size = window.prompt("Pick something under 100");

        body.removeChild(grid);

        body = document.querySelector("body");
        grid = document.createElement("div");
        grid.classList.add("grid");
        body.appendChild(grid);

        for(let i = 0; i < (size*size); i++){
            let square = document.createElement("div");
            square.classList.add("square");

            square.addEventListener('mouseover', () => {
                const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
                const r = randomBetween(0, 255);
                const g = randomBetween(0, 255);
                const b = randomBetween(0, 255);
                square.style.backgroundColor = `rgb(${r},${g},${b})`;
            });

            let newSize = (704 - (size * 4)) / size;
            square.style.width = newSize + "px";
            square.style.height = newSize + "px";

            square.style.color = "red";
            square.classList.remove("square")
            square.classList.add("modified")

            grid.appendChild(square);

            grid.appendChild(button);
        }
    } else {
        body.removeChild(grid);

        body = document.querySelector("body");
        grid = document.createElement("div");
        grid.classList.add("grid");
        body.appendChild(grid);

        for(let i = 0; i < (size*size); i++){
            let square = document.createElement("div");
            square.classList.add("square");

            square.addEventListener('mouseover', () => {
                const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
                const r = randomBetween(0, 255);
                const g = randomBetween(0, 255);
                const b = randomBetween(0, 255);
                square.style.backgroundColor = `rgb(${r},${g},${b})`;
            });

            let newSize = (704 - (size * 4)) / size;
            square.style.width = newSize + "px";
            square.style.height = newSize + "px";

            square.style.color = "red";
            square.classList.remove("square")
            square.classList.add("modified")

            grid.appendChild(square);

            grid.appendChild(button);
        }
    }
}