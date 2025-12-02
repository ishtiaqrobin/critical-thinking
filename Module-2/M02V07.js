//* Input Data

const surveyResponse = [
    "A",
    "C",
    "B",
    "D",
    "A",
    "B",
    "A",
    "C",
    "B",
    "A",
    "B",
    "C",
    "A",
    "B",
];

//TODO: initiate empty object
//TODO: Check if the response already exists or not
//TODO: If it exits then increment the count
//TODO: If not then initialize it with 1

const count = surveyResponse.reduce((table, response) => {
    console.log(table, " :", response);

    if (table[response]) {
        table[response] = table[response] + 1; // increment the count
    } else {
        table[response] = 1; // initialize with 1
    }

    // table[response] = (table[response] || 0) + 1; // one line code with OR operator

    // table[response] = table[response] ? table[response] + 1 : 1; // one line code with ternary operator

    return table
}, {});

console.log(count);


//? Output
// {A: 5, C: 3, B: 5, D: 1} // example output