function capitalizeWords (arr) {
    // add whatever parameters you deem necessary - good luck!
    if (arr.length <= 1) {
        return [arr[0].toUpperCase()];
    }
    return capitalizeWords(arr.slice(0,1)).concat(capitalizeWords(arr.slice(1)));
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
