//* Denormalizing Data (Client-Side "Join")

// Senario: You have an array of users and a separate array of posts.
// You want to create new array of users where each user object contains a post array of their own posts.

//? Input
const users = [
    { id: 101, name: "John Doe" },
    { id: 102, name: "Bob Smith" },
    { id: 103, name: "Jane Doe" },
];

const posts = [
    { id: 1, userId: 102, title: "React Hooks" },
    { id: 2, userId: 101, title: "Data Structures" },
    { id: 3, userId: 101, title: "Node.js Basics" },
    { id: 4, userId: 103, title: "CSS in fun" },
    { id: 5, userId: 102, title: "Node.js streams" },
];

//TODO: Create a hashtable/lookup table of posts

// O(n)
const postByUserId = posts.reduce((table, post) => {
    const { userId } = post; // destructure the post object

    if (!table[userId]) { // if the user id is not in the table
        table[userId] = []; // create a new array
    }

    table[userId].push(post); // add the post to the array

    return table;
}, {});

// O(n)
const userWithPosts = users.map(user => {
    return {
        ...user,

        // O(1) 
        posts: postByUserId[user.id] || [],
    }
})

console.log(JSON.stringify(userWithPosts));

//? Output
// [
//     { id: 101, name: "John Doe", posts: [{ id: 2, ...}, { id: 3, ...}] },
//     { id: 102, name: "Bob Smith", posts: [{ id: 1, ...}, { id: 5, ...}] },
//     { id: 103, name: "Jane Doe", posts: [{ id: 4, ...}] },
// ]