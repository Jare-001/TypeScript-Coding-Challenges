function getGrade(score: number): string {
  if (score < 0 || score > 100) return "Invalid score";
  if (score >= 70) return "Grade A";
  if (score >= 60) return "Grade B";
  if (score >= 50) return "Grade C";
  if (score >= 45) return "Grade D";
  return "Grade F";
}

const score: number = 65;
console.log(getGrade(score));

// Test more values
console.log(getGrade(85));   // Grade A
console.log(getGrade(47));   // Grade D
console.log(getGrade(30));   // Grade F
console.log(getGrade(101));  // Invalid score