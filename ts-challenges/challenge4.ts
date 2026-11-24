const prices: number[] = [1500, 2500, 3000, 4500, 2000];

let total: number = 0;
let mostExpensive: number = prices[0];
let cheapest: number = prices[0];

for (const price of prices) {
  total += price;
  if (price > mostExpensive) mostExpensive = price;
  if (price < cheapest) cheapest = price;
}

const average: number = total / prices.length;

console.log("Number of items:", prices.length);
console.log("Total price: ₦" + total.toLocaleString());
console.log("Average price: ₦" + average.toLocaleString());
console.log("Most expensive: ₦" + mostExpensive.toLocaleString());
console.log("Cheapest: ₦" + cheapest.toLocaleString());