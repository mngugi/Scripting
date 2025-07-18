// Data types
// integer data type
console.log("--------------------------------------------------");
const Int_J = 54
console.log("Integer:", Int_J, 'is a number:', typeof IntJ === 'number');

// string data type
console.log("--------------------------------------------------");
const String_i = "The car could not start";
console.log("String:", String_i, 'is a string:', typeof String_i === 'string');

//  the type of function () { [native code] } is function

console.log("--------------------------------------------------------");
const newValues = [true, undefined, null, 0, NaN];
for (let i = 0; i < newValues.length; i++) {
    console.log("Value:", newValues[i], 'is of type:', typeof newValues[i]);
} 
console.log("------------------------Example-------------------------");

const fruits = ["apple", "banana", "cherry"];
for (let j= 0 ; j < fruits.length; j++) {
    console.log("Fruit:", fruits[j], 'is of type:', typeof fruits[j]);
}

console.log("--------------------------------------------------------");

/* Control Flow */

const nestedSports = [["football", "basketball"], ["tennis", "cricket"]];
for (let i = 0; i < nestedSports.length; i++) {
    for (let j = 0; j < nestedSports[i].length; j++) {
        console.log("Sport:", nestedSports[i][j]);
    }
}
console.log("--------------------------Example---------------------------");

const fruityArray = ["apple", "banana", "cherry"];
const beverageArray = ["water", "juice", "soda"];

for (let i = 0; i < fruityArray.length; i++) {
    for (let j = 0; j < beverageArray.length; j++) {
        console.log("Combination:", fruityArray[i], "with", beverageArray[j]);
    }
}

console.log("----------------------sort example----------------------------");

// mixed array
const mixedArray = ["soda", "apple", "Juice", "banana", "Tea", "cherry"];
// sort the array
const beverageListArray = ["soda", "Juice", "Tea"];
const fruitListArray = ["apple", "banana", "cherry"];
const vegetableListArray = ["carrot", "broccoli", "spinach"];

// initialize empty arrays
const sortedBeverages = [];
const sortedFruits = [];

for (let i = 0; i < mixedArray.length; i++) {
    if (beverageListArray.includes(mixedArray[i])) {
        sortedBeverages.push(mixedArray[i]);
    } else if (fruitListArray.includes(mixedArray[i])) {
        sortedFruits.push(mixedArray[i]);
    }
}

// sort the arrays alphabetically
sortedBeverages.sort();
sortedFruits.sort();

console.log("Sorted Beverages:", sortedBeverages);
console.log("Sorted Fruits:", sortedFruits);
console.log("--------------------------------------------------------");

// exercises 

console.log("----------------------Example----------------------------");

const sportsArray = ["football", "basketball", "tennis", "cricket", "hockey",
"baseball", "golf", "rugby", "volleyball", "swimming"];

const contactSports = ["football", "basketball", "rugby", "hockey"];
const nonContactSports = ["tennis", "cricket", "baseball", "golf", "volleyball", "swimming"];

// initialize empty arrays  
const contactSportsArray = [];
const nonContactSportsArray = [];

for (let i = 0; i < sportsArray.length; i++) {
    if (contactSports.includes(sportsArray[i])) {
        contactSportsArray.push(sportsArray[i]);
    } else if (nonContactSports.includes(sportsArray[i])) {
        nonContactSportsArray.push(sportsArray[i]);
    }
}   
// sort the arrays alphabetically
contactSportsArray.sort();
nonContactSportsArray.sort();   

console.log("Contact Sports:", contactSportsArray);
console.log("Non-Contact Sports:", nonContactSportsArray);
console.log("--------------------------------------------------------");