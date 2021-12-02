// Return all the prime numbers in an array
let array = [1,2,3,4,5,6,7,8,9,10,11,12];
let prime = function(val) {

        for(let i=2; i<val; i++) {
            if(val%i == 0) {
                return false;
            }
           
        }
        return true;
}

for(let i=0; i<array.length; i++) {
    console.log(prime(array[i]));
}
// output:[true,  true,  true,false, true,  false,true,  false, false, false, true,  false]



