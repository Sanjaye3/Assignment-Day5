// Convert all the strings to title caps in a string array
let array = ["my","name","is","sanjaye"];
let caps = function(array){
    for(i=0;i<array.length;i++){
        console.log(array[i].charAt(0).toUpperCase()+array[i].slice(1));
    }

}
caps(array);

// output:My Name Is Sanjaye

