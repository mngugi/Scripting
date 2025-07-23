function smallestDigit(x) {
  const digits = new Set(x.split(""));
  for (let i = 0; i <= 9; i++) {
    const d = i.toString();
    if (digits.has(d)) {
      return d;
    }
  }
}

console.log(smallestDigit("987654321234")); // Output: "1"
