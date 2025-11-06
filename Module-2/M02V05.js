// Count subtotal

const cartItems = [
    { id: "ph-001", name: "Smartphone", price: 600, quantity: 1 },
    { id: "lp-002", name: "Laptop", price: 1200, quantity: 2 },
    { id: "tb-003", name: "Tablet", price: 1400, quantity: 1 },
];

const subtotal = cartItems.reduce((accumulator, item) => { // accumulator is the total so far, item is the current item in the array
    // console.log("accumulator:", accumulator, "|", "item:", item);
    return accumulator + item.price * item.quantity; // This is the accumulator & item is the current item in the array
}, 0);

// console.log("Subtotal:", subtotal);


// Find the best scorer

const players = [
    { name: "Jamal Bhuyan", score: 88 },
    { name: "Sheikh Mursalin", score: 81 },
    { name: "Rakib Hossain", score: 95 },
    { name: "Topu Barma", score: 91 },
    { name: "Sohel Rana", score: 72 },
];

const bestScorer = players.reduce((bestPlayer, player) => {
    console.log("Best Player:", bestPlayer, "|", "Player:", player);

    if (bestPlayer.score > player.score) {
        return bestPlayer;
    }

    return player;
}, players[0]);

console.log("Best Scorer:", bestScorer);

