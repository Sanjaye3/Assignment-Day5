let array = ["my","name","is","sanjaye"];
(function(array){
    for(i=0;i<array.length;i++){
    console.log(array[i].charAt(0).toUpperCase()+array[i].slice(1));
}

}

)(array);
// output:My Name Is Sanjaye