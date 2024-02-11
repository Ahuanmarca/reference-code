/**
 * First of all, we will need to create a buffer, here with a fixed length of 16-bytes:
 */

const buffer = new ArrayBuffer(16);

/**
 * At this point, we have a chunk of memory whose bytes are all pre-initialized to 0. 
 * There's not a lot we can do with it, though. 
 * We can confirm that it is indeed 16 bytes long, and that's about it:
 */

if (buffer.byteLength === 16) {
    console.log("Yes, it's 16 bytes.");
} else {
    console.log("Oh no, it's the wrong size!");
}

/**
 * Before we can really work with this buffer, we need to create a view. 
 * Let's create a view that treats the data in the buffer as an array of 32-bit signed integers:
 */

const int32View = new Int32Array(buffer);

/**
 * Now we can access the fields in the array just like a normal array:
 */

for (let i = 0; i < int32View.length; i++) {
    int32View[i] = i*2;
}

console.log(int32View);
