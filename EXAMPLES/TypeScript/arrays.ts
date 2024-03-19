// Declare a type Product
type Product = {
  price: number;
  title: string;
};

// Some variables of type Product
const metroid: Product = { price: 35.99, title: "Metroid" };
const zelda: Product = { price: 39.99, title: "The Legend of Zelda" };

// An array of type Product
const products: Array<Product> = [
  metroid,
  zelda,
  { price: 49.99, title: "Super Mario Bros 3" },
];

// Function that takes array of Product and returns number
// We CAN annotate the callback, but we don't need to (?)
function getTotal(products: Array<Product>): number {
  return products.reduce(
    (acc: number, curr: Product): number => acc + curr.price,
    0
  );
}
getTotal(products);

// A two dimensional array representing a game board
const gameBoard: Array<Array<number>> = [[1, 2], [3, 4]];
gameBoard;

