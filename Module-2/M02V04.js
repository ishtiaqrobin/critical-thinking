// Some

// const numbers = [50, 10, 3, 8, 1, 12, 2];
// const hasEvenNumber = numbers.some(number => number % 2 === 0);

// console.log(hasEvenNumber); // true

// const currentUsersRoles = ["user", "editor", "admin"];
// const featuredAccessRoles = ["admin", "superadmin", "moderator"];

// const canAccess = currentUsersRoles.some(role =>
//     featuredAccessRoles.includes(role)
// );

// console.log(canAccess);

// Array.from() 

// const arr = Array.from({ length: 5 }).fill(1); // Create an array of length 5 and fill with 1

// const arr = Array.from({ length: 5 }, (_, index) => index); // Create an array of length 5 with values 0 to 4 & fill with index

// const arr = Array.from([1, 2, 3, 4, 5], (value, index) => value * value); // Create an array from existing array and fill with square of each value

// console.log(arr);

// Function to create a range of numbers
const range = (start, stop, step) =>
    Array.from(
        { length: Math.ceil((stop - start) / step) },
        (_, index) => start + index * step,
    ) // Create an array from start to stop with a specific step

console.log(range(1, 11, 2));

