// Sum of all numbers in an array
let numbers = [1,2,3,4,5];
let sum=function(numbers){
   return numbers.reduce((acc,current)=>acc+current) 
}
console.log(sum(numbers));
// output:15


