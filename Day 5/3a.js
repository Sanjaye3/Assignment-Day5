let a=[1,2,3,4,5];
//let odd=() =>if(a)
for (let i=0; i<a.length; i++) {
    if(a[i] % 2 != 0){
        console.log(a[i]);
    }
}
//let functionname = () => a[i] % 2 != 0
    


// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
let arr=userInput[0].split(" ").map(Number);
let length=arr.length;
for(j=0;j<length;j++){
    
    for (i=0;i<length;i++){
    
        if(arr[i]>arr[i+1]){
            [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
        // continue;
        }
        else{
            continue;
        // [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
    }
}
}


  //start-here
  //Your code goes here … replace the below line with your code logic 

  console.log(arr);
for(let j=0;j<length;j++){ 
    
    sum = arr[j];
    
    for(let i=j+1;i<length;i++){
        
        sum=sum+arr[i]
        
        if (sum ==1){
            console.log("True")
        }
    
        console.log(sum);
}


}   
  //end-here
});

