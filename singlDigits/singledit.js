function smallestDigit() {
  const input = document.getElementById("arrayInput").value;
  const resultDiv = document.getElementById("result");

  // Convert input into an array of digits
  const digits = input
    .split(",")
    .map(d => d.trim())
    .filter(d => /^[0-9]$/.test(d)); // keep only single-digit valid numbers

  if (digits.length === 0) {
    resultDiv.textContent = "Please enter valid single digits (0-9).";
    return;
  }

  // Find smallest digit
  const smallest = digits.reduce((min, d) => Math.min(min, parseInt(d)), 9);
  resultDiv.textContent = `Smallest digit: ${smallest}`;
}
