const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
const uint8ClampedArray = imageData.data;
console.log(uint8ClampedArray)