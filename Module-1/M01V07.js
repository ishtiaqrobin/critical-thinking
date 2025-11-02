// const startTime = performance.now();

// for (let i = 0; i <= 5000; i++) {
//     console.log(i);
// }

// const endTime = performance.now();
// console.log(`Execution time: ${endTime - startTime} milliseconds`);

// console.time('task');

// for (let i = 0; i <= 5000; i++) {
//     console.log(i);
// }

// console.timeEnd('task');

// Create two arrays: first with 300,000 elements, second with 600,000 elements
const firstArray = [];
const secondArray = [];

for (let i = 0; i < 600000; i++) {
    if (i < 300000) {
        firstArray.push(i);
    }
    secondArray.push(i);
}

console.log('first array', firstArray.length);
console.log('second array', secondArray.length);

// Map
console.time('map1');
const firstUserList = firstArray.map((number) => ({ userId: number }));
console.timeEnd('map1');

console.time('map2');
const secondUserList = secondArray.map((number) => ({ userId: number }));
console.timeEnd('map2');

// Find
console.time('find');
const user = secondUserList.find((user) => user.userId === 20000);
console.timeEnd('find');

// Filter
console.time('filter');
// const filteredUsers = secondUserList.filter((user) => user.userId < 5000);
console.timeEnd('filter');

// Get by Index number
console.time('get index');
const userData = secondUserList[5000];
console.timeEnd('get index');

