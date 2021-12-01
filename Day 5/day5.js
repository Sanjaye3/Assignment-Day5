// Print odd numbers in an array(anonymous function)
// let array=[1,2,3,4,5,6];
// // let odd = function(array){
// //     for(i=0;i<array.length;i++){
// //         if(array[i]%2 != 0){
// //             console.log(array[i]);
// //         }
// //     }
// // }
// // odd(array);

// Print odd numbers in an array(IIFE)
// (function(array) {
//         for(i=0;i<array.length;i++){
//             if(array[i]%2 != 0){
//                 console.log(array[i]);
//             }
//         }
//     }
// )(array);
// Convert all the strings to title caps in a string array(anonymous function)
// // let array = ["my","name","is","sanjaye"];
// // let caps = function(array){
// //     for(i=0;i<array.length;i++){
// //         console.log(array[i].charAt(0).toUpperCase()+array[i].slice(1));
// //     }

// // }
// // caps(array);

// Convert all the strings to title caps in a string array(IIFE)

// // (function(array){
// //             for(i=0;i<array.length;i++){
// //             console.log(array[i].charAt(0).toUpperCase()+array[i].slice(1));
// //         }
    
// //     }

// // )(array);

// let numbers = [1,2,3,4,5];
// let sum=function(numbers){
//    return numbers.reduce((acc,current)=>acc+current) 
// }
// console.log(sum(numbers));


// (function(numbers) {

//     console.log(numbers.reduce((acc,current)=>acc+current)) ;

// })(numbers);




//return all the prime numbers in an array
//anonymous functions

// let array = [1,2,3,4,5,6,7,8,9,10,11,12];
// // let val=2
// let prime = function(val) {

//         for(let i=2; i<val; i++) {
//             if(val%i == 0) {
//                 return false;
//             }
           
//         }
//         return true;
// }

// for(let i=0; i<array.length; i++) {
//     console.log(prime(array[i]));
// }

//return all the prime numbers in an array
//IIFE functions
// let result=[];
// let array = [1,2,3,4,5,6,7,8,9,10,11,12];
// (function(array) {

//         for(let i=0; i<array.length; i++) {
            
//             result.push(prime(array[i]));
           
//         }
// })(array);
// console.log(result);


//Return all the palindromes in an array
//anonymous function

// let array1=["abba","111","hello","abba"];


// let ispalindrome=function(str){
    
//     let ans=[];

//     for(let i=str.length-1; i>=0; i--){
//         // console.log(array1[i]);
//         ans=ans + str[i];
    
//     }
//     // console.log(ans);

//     if(ans==str){
//         console.log("it is palindrome");
//     }
//     else{
//         console.log("it is not palindrome");
//     }
// }
// for(i=0;i<array1.length;i++){
//     ispalindrome(array1[i]);
// }

//iife function

// (function(str){
    
// let ispalindrome=function(str){
    
//     let ans=[];

//     for(let i=str.length-1; i>=0; i--){
//         // console.log(array1[i]);
//         ans=ans + str[i];
    
//     }
//     // console.log(ans);

//     if(ans==str){
//         console.log("it is palindrome");
//     }
//     else{
//         console.log("it is not palindrome");
//     }
// }
// for(i=0;i<array1.length;i++){
//     ispalindrome(array1[i]);
// }
    
// })(array1);



//Return median of two sorted arrays of same size
//anonymous function

// let arr1 = [10,11,12,13,18];

// let arr2 = [3,7,12,15];




// let mergeTwo = function (arr1, arr2) {

//     let result = [...arr1, ...arr2];

//     return result.sort((a,b) => a-b);

// }



// let result = mergeTwo(arr1, arr2);

// // console.log(result);

// let median=function(result) {
//     if (result.length % 2 == 0) {
        
//         value = result[result.length / 2] + result[(result.length / 2) + 1]

//         console.log(value/2);
//     }

//     else{
//         let odd=result[Math.ceil(result.length / 2)];

//         console.log(odd);
//     }
// }

// median(result);



//Return median of two sorted arrays of same size
//iife function


// let arr1 = [10,11,12,13,18];

// let arr2 = [3,7,12,15];




// let mergeTwo = function (arr1, arr2) {

//     let result = [...arr1, ...arr2];

//     return result.sort((a,b) => a-b);

// }



// let result = mergeTwo(arr1, arr2);

// console.log(result);

// let median=function(result) {
//     if (result.length % 2 == 0) {
        
//         value = result[result.length / 2] + result[(result.length / 2) + 1]

//         console.log(value/2);
//     }

//     else{
//         let odd=result[Math.ceil(result.length / 2)];

//         console.log(odd);
//     }
// }

// (function(result) {
//     if (result.length % 2 == 0) {
        
//         value = result[result.length / 2] + result[(result.length / 2) + 1]

//         console.log(value/2);
//     }

//     else{
//         let odd=result[Math.ceil(result.length / 2)];

//         console.log(odd);
//     }


// })(result)



//remove duplicates in a array
// anonymous function
let array1 = [111,222,333,111,222,444];

// let remove=function(array1){
// uniq = [... new Set(array1)];
// console.log(uniq);
// }

// remove(array1)


// iife function
// (function(array1){
//     uniq = [... new Set(array1)];
//     console.log(uniq);
// })(array1)


// rotate an array by k times
// anonymous function
// num=[1,2,3,4,5]
// k=1
// let rotate=function(num,k){
//     for(let i=0;i<k;i++){
//         num.unshift(num.pop());
//     }
//     let result=num;
//     console.log(result);
// }
// rotate(num,k)

// rotate an array
// iiife function

// num=[1,2,3,4,5];
// k=11;
// (function (num,k) {
//     for(let i=0;i<k;i++){
//         num.unshift(num.pop());
//     }
//     console.log(num);
// })(num,k);
  