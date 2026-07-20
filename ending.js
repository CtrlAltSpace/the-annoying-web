const screen = document.getElementById("screen");

function draw() {

    const charWidth = 9;     // Approximate width of one █
    const charHeight = 16;   // Same as font size

    const cols = Math.ceil(window.innerWidth / charWidth) + 3;
    const rows = Math.ceil(window.innerHeight / charHeight);

    const block = "\u2588";

    let output = "";

    for (let y = 0; y < rows; y++) {
        output += block.repeat(cols) + "\n";
    }

    screen.textContent = output;
}

draw();

window.addEventListener("resize", draw);