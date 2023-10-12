const fruits = [
    "🍇",
    "🍈",
    "🍉",
    "🍊",
    "🍋",
    "🍌",
    "🍍",
    "🍎",
    "🍏",
    "🍐",
    "🍑",
    "🍒",
    "🍓"
];

const [first, second, ...restOfTheFruits] = fruits;

console.log(first);
console.log(second);
console.log(restOfTheFruits);