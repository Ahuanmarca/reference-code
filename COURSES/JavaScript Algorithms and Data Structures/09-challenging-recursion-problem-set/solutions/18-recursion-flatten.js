function flatten(arr){
    // add whatever parameters you deem necessary - good luck!
    let flatArr = [];
    for (let element of arr) {
        if (Array.isArray(element)) {
            flatArr = flatArr.concat(flatten(element));
        } else {
            flatArr.push(element);
        }
    }
    return(flatArr);
}
  
console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
