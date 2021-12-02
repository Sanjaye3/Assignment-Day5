// Print odd numbers in an array
let array=[1,2,3,4,5,6];
let odd = function(array){
    for(i=0;i<array.length;i++){
        if(array[i]%2 != 0){
            console.log(array[i]);
        }
    }
}
odd(array);
//output:1,3,5



