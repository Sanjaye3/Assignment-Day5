// Sum of all numbers in an array
let numbers = [1,2,3,4,5];
(function(numbers) {

    console.log(numbers.reduce((acc,current)=>acc+current)) ;

})(numbers);
// output:15