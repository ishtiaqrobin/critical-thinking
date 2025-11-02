// data setup

function generateSimData(size) {
    const itemPool = [
        "Apple",
        "Banana",
        "Orange",
        "Grapes",
        "Mango",
        "Pineapple",
        "Strawberry",
        "Blueberry",
        "Watermelon",
        "Peach",
        "Apple",
        "Banana",
        "Orange",
        "Grapes",
        "Mango",
        "Pineapple",
    ];

    const generatedData = [];
    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * itemPool.length);
        generatedData.push(itemPool[randomIndex]);
    }

    return generatedData;
}

const hugeDataSet = generateSimData(500000);

console.log("Original Data Size:", hugeDataSet.length);

// Brute Force

const arrStartTime = performance.now();

const removeDupArr = (arr) => {
    const newArr = []; // Initialize an empty array to store unique elements

    arr.forEach((element) => {
        if (!newArr.includes(element)) { // Check if element is not already in newArr
            newArr.push(element); // Add element to newArr
        }
    });
    return newArr; // Return the array without duplicates
}

const removeDupArrResult = removeDupArr(hugeDataSet);

console.log(removeDupArrResult);

const arrEndTime = performance.now();

console.log("Brute Force Time Taken:", (arrEndTime - arrStartTime), "ms");

// Using Set

const setStartTime = performance.now();

const removeDupSet = (arr) => {
    const set = new Set(arr); // Create a Set from the array to automatically remove duplicates 

    return Array.from(set); // Convert Set back to Array
}

const removeDupSetResult = removeDupSet(hugeDataSet);

console.log(removeDupSetResult);

const setEndTime = performance.now();
console.log("Set Time Taken:", (setEndTime - setStartTime), "ms");


// Comparison:
// The Set method is significantly faster than the Brute Force method for large datasets.
// For smaller datasets, the difference may be negligible, but as the dataset size increases, the efficiency of using Set becomes more apparent.

// Algorithmic Complexity:
// Brute Force: O(n^2) due to nested operations (forEach + includes)
// Using Set: O(n) due to single pass insertion into Set and conversion back to Array

// Details Description:

// 1. Brute Force Method:
//    - Creates a new array to store unique elements.
//    - Iterates through each element in the original array.
//    - Checks if the element is not already in the new array.
//    - If not, adds the element to the new array.

// 2. Using Set:
//    - Creates a Set from the original array to automatically remove duplicates.
//    - Converts the Set back to an Array, effectively removing duplicates.

// Conclusion:
// For removing duplicates from arrays, especially large ones, using Set is the preferred approach due to its efficiency and simplicity.


