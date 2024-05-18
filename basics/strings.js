const name ="harshit"
const repoCount = 50

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('harshtech god faf')
// console.log(gameName[4]);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(5));


console.log(gameName.indexOf('t'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newString1 = "    harshit   ";
console.log(newString1.trim());

const url = "https://harshit.com/harshit%20anchan"

console.log(url.replace('%20', '-'))

console.log(url.includes('harshit'));

console.log(url.includes('hello'));

console.log(gameName.split(' '));