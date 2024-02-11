function reverse(str){
    // add whatever parameters you deem necessary - good luck!
    const strArr = Array.from(str);
    
    function reverseArray(arr) {
        if (arr.length === 1) {
            return arr;
        }
        return arr.slice(arr.length-1, arr.length).concat(reverseArray(arr.slice(0, arr.length-1)));
    }

    return reverseArray(strArr).toString().replaceAll(',', '');
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'
