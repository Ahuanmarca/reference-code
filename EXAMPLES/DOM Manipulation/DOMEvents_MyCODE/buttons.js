const randomColor = function() {
    const r = Math.ceil(Math.random() * 256) - 1;
    const g = Math.ceil(Math.random() * 256) - 1;
    const b = Math.ceil(Math.random() * 256) - 1;
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll("button");

for (let btn of buttons) {
    btn.addEventListener('click', randomizeColor);
}

function randomizeColor() {
    this.style.backgroundColor = randomColor();
}