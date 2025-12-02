// const set = new Set();

// set.add("apple");
// set.add("banana");
// set.add("orange");
// set.add("apple"); // Duplicate, will not be added again

// console.log(set);

// const arr = ["apple", "banana", "orange"]

// const mezba = { userName: "Mezba" };
// const robi = { userName: "Robi" };
// const kawsar = { userName: "Kawsar" };
// const tonmoy = { userName: "Tonmoy" };

// const set = new Set();
// set.add(mezba);
// set.add(robi);
// set.add(kawsar);
// set.add(tonmoy);
// set.add(mezba); // Duplicate, will not be added again

// console.log(set);

// const arr = ["apple", "banana", "orange", "apple", "banana"]; // Duplicate values, will be removed in Set

// const set = new Set(arr);

// set.has("tomato"); // true

// console.log(set.has("tomato")); // false
// console.log(set.delete("banana")); // true

// console.log(set);

// set.push("grape"); // Error: Set does not have push method
// set.add("grape"); // Correct way to add an element to a Set

// const test = Array.from(set); // Convert Set back to Array
// test.push("grape");
// test.push("melon");

// console.log(test);

// console.log(set);

const arr = ["apple", "banana", "orange", "apple", "banana"];

//* Brute Force
const removeDupArr = (arr) => {
    const newArr = []; // Initialize an empty array to store unique elements

    arr.forEach(element => { // Iterate through each element in the original array
        if (!newArr.includes(element)) { // Check if element is not already in newArr
            newArr.push(element); // Add element to newArr
        }
    });

    return newArr; // Return the array without duplicates
}

console.log(removeDupArr(arr)); // Output: ["apple", "banana", "orange"]

//* Using Set
const removeDupSet = (arr) => {
    const set = new Set(arr); // Create a Set from the array, automatically removing duplicates

    return Array.from(set);// Convert Set back to Array and return
}

console.log(removeDupSet(arr)); // Output: ["apple", "banana", "orange"]
