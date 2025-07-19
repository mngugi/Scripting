function swapBars(i, j) {
  const bars = document.querySelectorAll(".bar");
  const container = document.getElementById("array");

  // Clone nodes
  const bar1 = bars[i].cloneNode(true);
  const bar2 = bars[j].cloneNode(true);

  // Replace with clones
  container.replaceChild(bar1, bars[i]);
  container.replaceChild(bar2, bars[j]);

  // Swap again to preserve order
  container.insertBefore(bar2, container.children[i]);
  container.insertBefore(bar1, container.children[j]);
}
