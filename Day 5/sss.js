

let arr1 = [10,11,12,13,15];

let arr2 = [3,7,12,15];




let mergeTwo = function (arr1, arr2) {

    let result = [...arr1, ...arr2];

    return result.sort((a,b) => a-b);

}



let result = mergeTwo(arr1, arr2);

console.log(result);