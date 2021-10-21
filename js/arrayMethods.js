/*
    ARRAY METHODS
*/

// Looping with arrays and strings

// Creating an array
let names = ['Jim', 'Alice', 'Fred', 'Bill', 'Margaret']

console.log(names);

// Method 1 of looping through an array - for...of
for (let n of names){
    console.log(n);
}


// Method 2 of looping - regular for with array.length

for (let i = 0; i < names.length; i++){
    console.log(i, names[i])
}


// Create a string (also an iterable)
let sentence = 'This is my sentence';

// Method 1 loop through string - for...of
for (let letter in sentence){
    console.log(letter)
}


// Method 2 - for and string length
for (let i = 0; i < sentence.length; i++){
    console.log(i, sentence[i])
}


console.clear()


// ARRAY METHODS

let newNames = ['Justin', 'Nicole', 'Molly', 'Charlie']

// Create a function to be our callBackFunction
function callBack(el, idx, arr){
    console.log(el.toUpperCase(), idx, arr)
}

// Using the .forEach() method
newNames.forEach(callBack)


// Above as arrow function
newNames.forEach((e, i, a) => console.log(e, i, a))

console.clear()



// Array.map() Method

let myNumbers = [1, 2, 3, 4, 5, 6]

function squareNum(num, idx, arr){
    console.log(arr)
    if (idx % 2 == 0){
        return num ** 3
    } else {
        return num ** 2
    }
}


let squareNums = myNumbers.map(squareNum)

console.log(squareNums);
console.log(myNumbers);


// Above as Arrow Function
let exponentNums = myNumbers.map((e, i) => i%2==0 ? e**3 : e**2)
console.log(exponentNums);


console.clear()


// Array.filter() Method
let cities = ['Chicago', 'Charlotte', 'Boston', 'Columbus', 'Austin']

function isCName(city){
    return city[0].toUpperCase() === 'C'
}

let cNameCities = cities.filter(isCName)
console.log(cNameCities);


// Above as arrow function
let bNameCities = cities.filter(city => city[0].toUpperCase() === 'B')
console.log(bNameCities);

console.clear()



// Array.reduce()
let nums = [2, 4, 6, 8, 10]

function myReducer(prevValue, currentValue){
    console.log(prevValue,currentValue);
    return prevValue + currentValue;
}


let numsReduced = nums.reduce(myReducer)

console.log(numsReduced);


let accumulator = 0;
for (let num of nums){
    accumulator += num
}
console.log(accumulator)

console.clear()

// Array.slice()
let colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']

console.log(colors)

console.log(colors.slice(2, 5))

console.log(colors.slice(1, -2))

console.clear()
// Array.splice()
console.log(colors);
console.log(colors.splice(2,2,'Pink', 'Black', 'Turquoise'))
console.log(colors)

let m = [1, 2, 3, 4]

let n = m.slice()

m.pop()
console.log(m);
console.log(n);

let objectA = {age: 1}
let objectB = {age: 5}
let myNewArray = [objectA, objectB]

let copyArray = myNewArray.slice()

copyArray[0].age = 10

console.log(myNewArray)
console.log(copyArray)

console.log(objectA)