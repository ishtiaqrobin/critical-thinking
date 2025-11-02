const generatedBookData = (bookSize) => {
    const bookArrData = [
        "English",
        "Bangla",
        "Math",
        "Physics",
        "Chemistry",
        "Biology",
        "History",
        "English",
        "Bangla",
        "Math",
        "Physics",
        "Chemistry",
    ];

    const generateBook = [];
    for (let i = 0; i < bookSize; i++) {
        const randomBookIndex = Math.floor(Math.random() * bookArrData.length);
        // console.log(randomBookIndex, Math.random());

        generateBook.push(bookArrData[randomBookIndex]);
    }

    return generateBook;
}

const hugeBookData = generatedBookData(500000);
// console.log("Original Book Data Size:", hugeBookData);

// Brute Force

const arrStartTime = performance.now();
const removeDupBookArr = (arr) => {
    const newBookArr = [];

    arr.forEach(element => {
        if (!newBookArr.includes(element)) {
            newBookArr.push(element);
        }
    });

    return newBookArr;
}

const removeDupBookArrResult = removeDupBookArr(hugeBookData);

const arrEndTime = performance.now();

console.log("Without Duplicate Data Using Brute Force:", removeDupBookArrResult);
console.log("Brute Force Time Taken :", (arrEndTime - arrStartTime), "milisecond");

// Using Set

const arrSetStartTime = performance.now();
const removeDupArrSet = (arr) => {
    const bookSet = new Set(arr);

    return Array.from(bookSet);
    // return bookSet;
}

const removeDupArrSetResult = removeDupArrSet(hugeBookData);

const arrSetEndTime = performance.now();

console.log("Without Duplicate Data Using Set:", removeDupArrSetResult);
console.log("Set Time Taken :", (arrSetEndTime - arrSetStartTime), "milisecond");