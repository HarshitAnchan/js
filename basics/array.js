const marvel_heros = ["thor", "hulk", "ironman"]

const dc_heros = ["Superman", "Batman", "flash"]


// marvel_heros.push(dc_heros)
// console.log(marvel_heros);


//concat
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


//spread
const allHeros = [...marvel_heros,...dc_heros]
console.log(allHeros);

const another_arr = [1,2,3,[4,5,6],7,[4,5]]

const real_anotherArr = another_arr.flat(Infinity)

console.log(real_anotherArr);


console.log(Array.isArray("harshit"))
console.log(Array.from("harshit"))
console.log(Array.from({name: "harshit"})) // interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
