// Rotate an array by k times
num=[1,2,3,4,5];
k=12;
(function (num,k) {
    for(let i=0;i<k;i++){
        num.unshift(num.pop());
    }
    console.log(num);
})(num,k);
  

// Output:[ 4, 5, 1, 2, 3 ]