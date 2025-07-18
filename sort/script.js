function sortNumbers() {
  let container = document.getElementById("number-container");
  let boxes = Array.from(container.children);

  // Convert text to numbers, sort, and reassign values
  let sortedValues = boxes
    .map(box => parseInt(box.textContent))
    .sort((a, b) => a - b);

  // Animate by fading out and in
  boxes.forEach((box, i) => {
    box.style.opacity = "0";
    setTimeout(() => {
      box.textContent = sortedValues[i];
      box.style.opacity = "1";
    }, 300);
  });
}
