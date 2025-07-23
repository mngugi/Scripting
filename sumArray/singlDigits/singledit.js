function smallestDigit() {
  const input = document.getElementById("arrayInput").value;
  const resultDiv = document.getElementById("result");

  // Convert input to a set of digits
  const digits = new Set(
    input
      .split(",")
      .map(d => d.trim())
      .filter(d => /^[0-9]$/.test(d)) // ensure only single digits
  );

  // Check from 0 to 9
  for (let i = 0; i <= 9; i++) {
    const digit = i.toString();
    if (digits.has(digit)) {
      resultDiv.textContent = `Smallest digit: ${digit}`;
      return;
    }
  }

  // If no valid digit found
  resultDiv.textContent = "No valid digits entered.";
}
