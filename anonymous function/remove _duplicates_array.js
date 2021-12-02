//remove duplicates in a array
let array1 = [111,222,333,111,222,444];

let remove=function(array1){
uniq = [... new Set(array1)];
console.log(uniq);
}

remove(array1)
// Output:[ 111, 222, 333, 444 ]

(function(array1){
    uniq = [... new Set(array1)];
    console.log(uniq);
})(array1)


// Output:[ 111, 222, 333, 444 ]