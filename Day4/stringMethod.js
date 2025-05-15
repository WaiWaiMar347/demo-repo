let h="Hello"
console.log(h.charAt(4)); //return char at this index

console.log("JavaScript".includes("Script")); // return true or false if it has in string or not has

console.log("Hello".indexOf("l")); // Returns the index of the first occurrence of a substring
console.log("Hello".lastIndexOf("l")); //Returns the last index of a substring

console.log("Hello".slice(1, 4)); // Extracts a section of a string and returns it as a new string.
console.log("Hello".substring(1, 4)); // "ell".
console.log("Hello".substr(1, 3)); // Returns a substring starting from start of specified length

console.log("Hello".toUpperCase()); // Convert string to upper case 
console.log("Hello".toLowerCase()); // Convert string to lower case 

console.log("  Hello  ".trim()); // Remove space from both ends 
console.log("  Hello  ".trimStart()); 
console.log("  Hello  ".trimEnd()); 


console.log("Hello world".replace("world", "JS")); // "Hello JS"

console.log("a,b,c".split(",")); // Splits the string into an array based on the separator

console.log("Hi".repeat(3)); // Repeats the string a given number of times

console.log("Hello".startsWith("He")); // Checks if a string starts or ends with the given substring
console.log("Hello".endsWith("He"));


console.log("abc123".match(/c/)); // Find matches in a string
console.log("ABCDE".match(/c/gi));
//console.log("MEME".match(RegExp));
console.log("Hello".search("l"));



console.log("He".padStart(3, "0")); // Start with "0" umtil it reach the given length
console.log("He".padEnd(3, "0"));

console.log("hello".concat(" world")); //Concatenate existing string with new string


