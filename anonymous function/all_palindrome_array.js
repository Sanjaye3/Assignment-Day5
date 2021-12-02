//Return all the palindromes in an array

let array1=["abba","111","hello",];


let ispalindrome=function(str){
    
    let ans=[];

    for(let i=str.length-1; i>=0; i--){
        // console.log(array1[i]);
        ans=ans + str[i];
    
    }
    // console.log(ans);

    if(ans==str){
        console.log(array1[i]);
    }
    else{
        // console.log("it is not palindrome");
    }
}
for(i=0;i<array1.length;i++){
    ispalindrome(array1[i]);
}

// Output:abba 111





