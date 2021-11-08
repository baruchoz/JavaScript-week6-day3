// console.log('Test');

//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}   


// Brians solution:

function parsePersonObject(person){
    // Loop through the keys of person
    for (let i = 0; i < Object.keys(person).length; i++){
        // If value of object at key[i] is an array
        if (Array.isArray(Object.values(person)[i])){
            // loop through the array
            for (let j = 0; j < Object.values(person)[i].length; j++){
                // if the value of array[j] is an object
                if(typeof(Object.values(person)[i][j]) === 'object'){
                    // loop through the keys of person[i][j]
                    for (let k = 0; k < Object.keys(Object.values(person)[i][j]).length; k++){
                        // log the value at index k of person[i][j]
                        console.log(Object.values(Object.values(person)[i][j])[k])
                    }
                }else {
                    console.log(Object.values(person)[i][j])
                }
            }
        }else{
            console.log(Object.values(person)[i])
        }
    }
}


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years.
*/

// Create our Person Prototype (Person class)

// create the printInfo method


// Create another method for the addAge method


//=======Exercise #3=========//

/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

console.clear()

function replaceEvens(arr){
    console.log(arr)
    for (let i = 0; i < arr.length; i+=2) { 
    arr.splice(i, 1, 'even index')
    }
    console.log(arr)
}

replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"])

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]