function capitalizeFirst (arr) {
    // add whatever parameters you deem necessary - good luck!
    if (arr.length <= 1) {
        const word = arr[0];
        return [word[0].toUpperCase() + word.slice(1)];
    }
    return capitalizeFirst(arr.slice(0,1)).concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
