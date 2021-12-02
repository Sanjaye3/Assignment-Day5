// Rotate an array by k times
num=[1,2,3,4,5];
k=12;
let rotate=function(num,k){
    for(let i=0;i<k;i++){
        num.unshift(num.pop());
    }
    let result=num;
    console.log(result);
}
rotate(num,k)

// Output:[ 4, 5, 1, 2, 3 ]


