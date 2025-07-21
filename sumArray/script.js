function calculateSum() {
  const input = document.getElementById("arrayInput").value;
  const resultDiv = document.getElementById("result");

  // Convert input string to array of numbers
  const arr = input
    .split(",")
    .map(num => parseFloat(num.trim()))
    .filter(num => !isNaN(num)); // Filter out invalid entries

  const sum = arraySum(arr);
  resultDiv.textContent = `Sum: ${sum}`;
}

function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
