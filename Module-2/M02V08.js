//* Grouping and Aggregating Data

const sales = [
    { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
    { category: "Clothing", item: "T-Shirt", price: 20, quantity: 15 },
    { category: "Electronics", item: "Smartphone", price: 65, quantity: 2 },
    { category: "Books", item: "The Great Gatsby", price: 10, quantity: 20 },
    { category: "Clothing", item: "Jeans", price: 50, quantity: 8 },
    { category: "Books", item: "To Kill a Mockingbird", price: 15, quantity: 12 },
];

//TODO: Initialize empty object
//TODO: Intialize object category
//TODO: Calculate the revenue

const totalSalesByCategory = sales.reduce((table, sale) => {
    console.log(table, " :", sale);
    const { category, price, quantity } = sale;

    if (!table[category]) {
        table[category] = {
            totalRevenue: 0,
            itemCount: 0,
        };
    }

    table[category].totalRevenue += price * quantity;
    table[category].itemCount += quantity;

    return table;
}, {});

console.log(totalSalesByCategory);

//? Output
// {
//  Electronics: {
//     totalRevenue: 3200,
//     itemCount: 15,
//  },
//  Clothing: {
//     totalRevenue: 600,
//     itemCount: 23,
//  },
//  Books: {
//     totalRevenue: 115,
//     itemCount: 32,
//  },
// }