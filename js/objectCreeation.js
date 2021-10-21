// JavaScript Object - {key: value}


// Simple JavaScript Object
let person = {
    name: 'Thomas',
    age: 33,
    favColor: 'blue'
};

console.log(person)

console.log(person.name); // Dot Notation
console.log(person['age']); // Bracket Notation


// Complex JavaScript Objects
let person2 = {
    name: 'Heather',
    age: 28,
    programmingLanguages: ['Python', 'JavaScript', 'C++', 'Java'],
    teams: [
        {
            mlb: 'Chicago White Sox',
            nfl: 'Chicago Bears'
        },
        {
            mlb: 'Washington Nationals',
            nfl: 'Los Angeles Rams'
        }
    ],
    job: {
        company: 'A good one',
        salary: 1000000,
        position: 'Boss'
    }
}


console.log(person2);

console.log(person2.job.salary);
console.log(person2.teams[0].nfl)


// Objects can also have functions

let myObject = {
    name: 'Albert',
    test: function(){console.log(`The name is ${this.name}`)}
}

myObject.test()

console.clear()



// JavaScript Prototypes

// let animal = {}
// animal.name = 'Buddy'
// animal.energy = 10

// animal.eat = function(amount){
//     console.log(`${this.name} is eating.`)
//     this.energy += amount
// }

// animal.sleep = function(length){
//     console.log(`${this.name} is sleeping.`)
//     this.energy += length
// }

// animal.play = function(length){
//     console.log(`${this.name} is playing!`)
//     this.energy -= length
// }

// console.log(animal)

// animal.eat(10)
// animal.play(15)
// animal.sleep(15)

// console.log(animal)

////////////////////////////
// Function Instantiation //
////////////////////////////

// function Animal(name, energy){
//     let animal = {}
//     animal.name = name
//     animal.energy = energy

//     animal.eat = function(amount){
//         console.log(`${this.name} is eating.`)
//         this.energy += amount
//     }

//     animal.sleep = function(length){
//         console.log(`${this.name} is sleeping.`)
//         this.energy += length
//     }

//     animal.play = function(length){
//         console.log(`${this.name} is playing!`)
//         this.energy -= length
//     }

//     return animal
// }

// const goofy = Animal('Goofy', 25);
// const snoopy = Animal('Snoopy', 10);

// console.log(goofy);
// console.log(snoopy);


// Function Instantiation with Shared Methods

// const animalMethods = {
//     eat: function(amount){
//         console.log(`${this.name} is eating.`)
//         this.energy += amount
//     },
//     sleep: function(length){
//         console.log(`${this.name} is sleeping.`)
//         this.energy += length
//     },
//     play: function(length){
//         console.log(`${this.name} is playing!`)
//         this.energy -= length
//     }
// }


// function Animal(name, energy){
//     let animal = {}
//     animal.name = name
//     animal.energy = energy

//     animal.eat = animalMethods.eat

//     animal.sleep = animalMethods.sleep

//     animal.play = animalMethods.play

//     return animal
// }

// const goofy = Animal('Goofy', 25);
// const snoopy = Animal('Snoopy', 10);

// console.log(goofy);
// console.log(snoopy);


// Object.create()

let parent = {
    name: 'Laurie',
    age: 60,
    heritage: 'Irish'
}

let child = Object.create(parent)
child.name = 'Sean'
child.age = 25

console.log(child)
console.log(child.name)


// Function Instantiation with Object.create

// const animalMethods = {
//     eat: function(amount){
//         console.log(`${this.name} is eating.`)
//         this.energy += amount
//     },
//     sleep: function(length){
//         console.log(`${this.name} is sleeping.`)
//         this.energy += length
//     },
//     play: function(length){
//         console.log(`${this.name} is playing!`)
//         this.energy -= length
//     }
// }


// function Animal(name, energy){
//     let animal = Object.create(animalMethods)
//     animal.name = name
//     animal.energy = energy

//     return animal
// }

// const goofy = Animal('Goofy', 25);
// const snoopy = Animal('Snoopy', 10);

// console.log(goofy);
// console.log(snoopy);




// JAVASCRIPT PROTOTYPE
function doSomething(){}
console.log(doSomething.prototype)


// console.log(Animal.prototype)


// function Animal(name, energy){
//     let animal = Object.create(Animal.prototype)
//     animal.name = name
//     animal.energy = energy

//     return animal
// }

// Animal.prototype.eat = function(amount){
//     console.log(`${this.name} is eating.`)
//     this.energy += amount
// }

// Animal.prototype.sleep = function(length){
//     console.log(`${this.name} is sleeping.`)
//     this.energy += length
// }

// Animal.prototype.play = function(length){
//     console.log(`${this.name} is playing!`)
//     this.energy -= length
// }

// const goofy = Animal('Goofy', 25);
// const snoopy = Animal('Snoopy', 10);

// console.log(goofy);
// console.log(snoopy);


// Using the New Keyword


// function Animal(name, energy){
//     // let newObject = Object.create(Animal.prototype)
//     this.name = name
//     this.energy = energy

//     // return newObject
// }

// Animal.prototype.eat = function(amount){
//     console.log(`${this.name} is eating.`)
//     this.energy += amount
// }

// Animal.prototype.sleep = function(length){
//     console.log(`${this.name} is sleeping.`)
//     this.energy += length
// }

// Animal.prototype.play = function(length){
//     console.log(`${this.name} is playing!`)
//     this.energy -= length
// }

// const goofy = new Animal('Goofy', 25);
// const snoopy = new Animal('Snoopy', 10);

// console.log(goofy);
// console.log(snoopy);

// console.log(this.name)




// ES6 - Using the class keyword
class Animal{
    constructor(name, energy){
        this.name = name
        this.energy = energy
    }
    
    eat(amount){
        console.log(`${this.name} is eating.`)
        this.energy += amount
    }
    
    sleep(length){
        console.log(`${this.name} is sleeping.`)
        this.energy += length
    }
    
    play(length){
        console.log(`${this.name} is playing!`)
        this.energy -= length
    }
}
    
const goofy = new Animal('Goofy', 25);
const snoopy = new Animal('Snoopy', 10);

console.log(goofy);
console.log(snoopy);



let myArray = [1, 2, 3, 4]

console.log(myArray);


let myNewArray = new Array();
console.log(myNewArray);

console.log(Array.prototype)


myArray.slice(3)


// JavaScript Object Inheritance

class Human{
    constructor(name, age, gender){
        console.log('Human constructor called!')
        this.name = name
        this.age = age
        this.gender = gender
    }

    eat(amount){
        console.log(`${this.name} is eating ${amount}`)
    }
}

// const wilma = new Human('Wilma', 25, 'F')
// const fred = new Human('Fred', 25, 'M')

// console.log(wilma)
// console.log(fred)

// EXTENDS keyword
class Baby extends Human{
    constructor(name, age, gender, canCrawl){
        console.log('Baby constructor called')
        super(name, age, gender)
        this.canCrawl = canCrawl
    }

    crawl(){
        if (this.canCrawl){
            console.log(`${this.name} can crawl`)
        } else {
            console.log(`${this.name} cannot crawl`)
        }
    }
}


const bambam = new Baby('Bam-Bam', 1, 'M', true)
console.log(bambam)






let myObject = {
    test: 1,
    abc: 'abc',
    hello: 'World',
    arr: [1, 2, 3, 4]
}

for (let key in myObject){
    console.log(key)
    console.log(myObject[key])
}


console.log(Object.keys(myObject))

for (let i = 0; i < Object.keys(myObject).length; i++){
    console.log(Object.keys(myObject)[i])
}

console.log(Object.values(myObject))
for (let i = 0; i < Object.keys(myObject).length; i++){
    console.log(Object.values(myObject)[i])
}