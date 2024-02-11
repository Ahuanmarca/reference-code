const canvas = document.querySelector("#canvas1");
const context = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 640;
const CANVAS_HEIGHT = canvas.height = 480;

const GAMESTATE = {

    gameFrame: 0,
    loopFrame: 0,
    staggerFrames: 10,

    backgroundSpeed: 1,
    
}

// const STATE = {
//     speed: 1,
//     currentFrame: 0,
// }

const background = {
    defaultSpeed: 1,
    width: 1024,
    height: 480,
    files: [
        {
            url: "assets/near.png",
            distance: 1,
        },
        {
            ulr: "assets/middle.png",
            distance: 5,
        },
        {
            url: "assets/back.png",
            distance: 10,
        },
    ],
    layers: [],
}

function importImage(imageURL) {
    const importedImage = new Image();
    importedImage.src = imageURL;
    return importedImage;
}

function truncate(number) {
    return parseFloat(number.toFixed(2));
}


// LAYERS NEED:
//      Image to loop in the background
//      Distance to define the scrolling speed

class Layer {
    constructor(imageURL, distance, nextImageURL) {

        this.imageURL = imageURL;
        this.distance = distance;
        this.nextImageURL = nextImageURL;

        // Layer position
        this.y = 0.00;
        this.x = 0.00;

        // ! Width and height should come from some json file
        this.width = background.width || 1024.00;
        this.height = background.height || 480.00;

        // Importing image
        this.image = importImage(imageURL);
        // nextImage is optional, for thesting the coupling at the border
        this.nextImage = nextImageURL == undefined ? importImage(imageURL) : importImage(nextImageURL);

        // More distance = less speed
        this.speed = background.defaultSpeed / distance;
    }
    // Change speed dinamically
    updateSpeed() {
        this.speed = background.defaultSpeed / distance;
    }
    // Update position of current layer
    updatePosition() {
        if (this.x < -this.width) {
            this.x = 0;
        } else if (this.x > 0) {
            this.x = -this.width;
        } else {
            this.x = this.x - this.speed;
        }
    }
    draw() {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
        context.drawImage(this.nextImage, (this.x + this.width), this.y, this.width, this.height);
    }
}

const BACKGROUND = {
    // layer1: new Layer("assets/back.png", 0.05),
    // layer1: new Layer(imageURL = "assets/back.png", nextImageURL = "assets/middle.png", distance = 10),
    layer1: new Layer(imageURL = "assets/back.png", distance = 10),
}

background.layers.push(new Layer(imageURL = "assets/back.png", distance = 10))
background.layers.push(new Layer(imageURL = "assets/middle.png", distance = 5))
background.layers.push(new Layer(imageURL = "assets/near.png", distance = 1))

background.layers

function animate() {
    context.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    BACKGROUND.layer1.updateSpeed();
    BACKGROUND.layer1.updatePosition();
    BACKGROUND.layer1.draw();
    // STATE.frame--;
    requestAnimationFrame(animate);




    // document.querySelector("#showFarX").innerText = BACKGROUND.layer1.x;
    // document.querySelector("#showFarXPlus").innerText = BACKGROUND.layer1.x;
    // document.querySelector("#showFarDifference").innerText = BACKGROUND.layer1.x;
}
animate();
