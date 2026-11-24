function analyzeNumber(num: number): void {
  // Positive, negative or zero
  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }

  // Even or odd
  console.log(num % 2 === 0 ? "Even" : "Odd");

  // Divisible by both 3 and 5
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("Divisible by both 3 and 5");
  } else {
    console.log("Not divisible by both 3 and 5");
  }
}

analyzeNumber(15);
console.log("---");
analyzeNumber(-8);
console.log("---");
analyzeNumber(0);