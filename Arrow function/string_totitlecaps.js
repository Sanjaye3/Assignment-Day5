//convert all the string to title caps
let word=["this","is","the","example"];
let convert=word.map(value => value.charAt(0).toUpperCase()+value.substring(1));
console.log(convert);

// Output:[ 'This', 'Is', 'The', 'Example' ]