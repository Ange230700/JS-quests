const cart = [
    {name: 'eggs', price: 3.99},
    {name: 'milk', price: 2.99},
    {name: 'butter', price: 5.99},  
    {name: 'bread', price: 4.99},
    {name: 'cereal', price: 5.99},
    {name: 'cheese', price: 6.99},
    {name: 'ice cream', price: 3.99},
    {name: 'juice', price: 2.99},
    {name: 'coffee', price: 7.99},
    {name: 'tea', price: 4.99},
    {name: 'soda', price: 1.99},
    {name: 'water', price: 0.99},
    {name: 'chips', price: 3.99},
    {name: 'cookies', price: 4.99},
    {name: 'cake', price: 6.99},
    {name: 'pie', price: 7.99},
    {name: 'steak', price: 15.99} 
];

const total = cart.reduce(
    (totalCost, item) => totalCost + item.price,
    0
);

console.log(total); // 93.92