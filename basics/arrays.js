//array 

const myArr = [0,  1, 2, 3, 4, 5]

const myHeros=["thor", "hulk"]

const newArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[2]);


// Array Methods

//push
// myArr.push(6)
// myArr.push(7)

// pop
// myArr.pop()

// ushift
// myArr.unshift(9)

//shift
// myArr.shift()

// console.log(myArr.includes(9));

// console.log(myArr.indexOf(9));


// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);


//slice , spLice 

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);

