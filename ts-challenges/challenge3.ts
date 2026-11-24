function validatePassword(password: string): string {
  const hasMinLength: boolean = password.length >= 8;
  const hasUppercase: boolean = /[A-Z]/.test(password);
  const hasLowercase: boolean = /[a-z]/.test(password);
  const hasNumber: boolean = /[0-9]/.test(password);

  if (hasMinLength && hasUppercase && hasLowercase && hasNumber) {
    return "Strong Password";
  }
  return "Weak Password";
}

console.log(validatePassword("Hello123")); 
console.log(validatePassword("hello123")); 
console.log(validatePassword("Hi1"));      