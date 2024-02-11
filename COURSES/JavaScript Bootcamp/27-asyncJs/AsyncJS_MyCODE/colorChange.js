const colorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

colorChange('red', 100)
    .then(() => colorChange('orange', 100))
    .then(() => colorChange('yellow', 100))
    .then(() => colorChange('green', 100))
    .then(() => colorChange('blue', 100))
    .then(() => colorChange('indigo', 100))
    .then(() => colorChange('violet', 100))
