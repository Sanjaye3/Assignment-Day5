// Return all the palindromes in an array
let arre = ["abba", "abc", "afa", "dfffffc", "jfffa"];

let palindrome = arre.filter(value => {
    
    // let rev = "";
    let left ="";
    let right = "";

    for (let i=0; i<value.length / 2; i++){
        left = left + value[i];
        right = right + value[value.length - i - 1];
    }
    
    if (left == right){
        return true
    }
    else{
        return false
    }
})

console.log(palindrome)
// output:[ 'abba', 'afa' ]