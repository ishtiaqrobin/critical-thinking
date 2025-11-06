// Sort

const numbers = [50, 10, 3, 8, 1, 12, 2];
const fruits = ["Banana", "Apple", "orange", "Mango", "apple", "Orange", "strawberry", "Pineapple"];

// const sortedNumber = numbers.sort((a, b) => a - b);
// const sortedFruits = fruits.sort();

fruits.sort((a, b) => a.localeCompare(b));

// console.log(numbers);
// console.log(sortedNumber);

// console.log(fruits);


// Nested array flat
const nestedArray = [1, 2, [3, 4], [5, 6, [7, 8]], 9, [[[10, 5]]]];
// const flatArr = nestedArray.flat(2); // Specify depth level
const flatArr = nestedArray.flat(Infinity); // Use Infinity for infinite depth

// console.log(flatArr);

const tagsFromPosts = [
    ["JavaScript", "Programming", "CSS", "HTML"],
    ["Python", "Data Science", "Machine Learning"],
    ["Java", "Spring", "JavaScript"],
    ["HTML", "CSS", "Design"],
];

const filteredTags = [...new Set(tagsFromPosts.flat())] // Alternative using Set to remove duplicates & spread operator for array
console.log(filteredTags);

// const set = new Set(tagsFromPosts.flat());
// console.log(set);
