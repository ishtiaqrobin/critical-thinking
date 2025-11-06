//* Generate a lookup tabele

//? Input 
const postsArray = [
    { id: "ph-001", title: "Intro SQL", author: "Alex" },
    { id: "ph-002", title: "Advanced JavaScript", author: "Sam" },
    { id: "ph-003", title: "Web Development", author: "Jessie" },
    { id: "ph-004", title: "CSS Grid Tricks", author: "Alex" },
];

//Info: Big-O notation: O(n), because in the worst case, we may have to check every element in the array

const lookupTable = postsArray.reduce((table, post) => {
    //Info: table is the accumulator, post is the current item

    table[post.id] = post; // set the post id as the key and the post object as the value

    return table;
}, {});

// console.log(lookupTable);

//? Desired Output
// {
//     "ph-101": { id: "ph-001", title: "Intro SQL", author: "Alex" },
//     "ph-102": { id: "ph-002", title: "Advanced JavaScript", author: "Sam" },
//     "ph-103": { id: "ph-003", title: "Web Development", author: "Jessie" },
//     "ph-104": { id: "ph-004", title: "CSS Grid Tricks", author: "Alex" },
// }

//! Big-O Notation: O(n) / linear growth. Because in the worst case, we may have to check every element in the array
// const post = postsArray.find(post => post.id === "ph-003");

// console.log(post);


// Info: Big-O notation: O(1) / constant growth, because the lookup table has a constant number of elements

// const post = lookupTable["ph-003"];

for (let post in lookupTable) {
    // console.log(post); // get the key
    console.log(lookupTable[post]); // get the value
}
// console.log(post);