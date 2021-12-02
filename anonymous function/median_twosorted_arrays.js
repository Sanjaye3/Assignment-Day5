//Return median of two sorted arrays of same size
//this code has both anonymous and iife function
let arr1 = [10,11,12,13,18];

let arr2 = [3,7,12,15,18];




let mergeTwo = function (arr1, arr2) {

    let result = [...arr1, ...arr2];

    return result.sort((a,b) => a-b);

}



let result = mergeTwo(arr1, arr2);

// console.log(result);

let median=function(result) {
    if (result.length % 2 == 0) {
        
        value = result[result.length / 2] + result[(result.length / 2) + 1]

        console.log(value/2);
    }

    else{
        let odd=result[Math.ceil(result.length / 2)];

        console.log(odd);
    }
}

median(result);

// Output:12.5









let mergeTwo = function (arr1, arr2) {

    let result = [...arr1, ...arr2];

    return result.sort((a,b) => a-b);

}



let result = mergeTwo(arr1, arr2);

console.log(result);

let median=function(result) {
    if (result.length % 2 == 0) {
        
        value = result[result.length / 2] + result[(result.length / 2) + 1]

        console.log(value/2);
    }

    else{
        let odd=result[Math.ceil(result.length / 2)];

        console.log(odd);
    }
}

(function(result) {
    if (result.length % 2 == 0) {
        
        value = result[result.length / 2] + result[(result.length / 2) + 1]

        console.log(value/2);
    }

    else{
        let odd=result[Math.ceil(result.length / 2)];

        console.log(odd);
    }


})(result)
// Output:12.5