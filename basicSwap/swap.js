function swap(a,b) {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
    
}
console.log("Swapping 5 and 10:", swap(5, 10));

function swaparray(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

let nums = [10, 20, 30];
swaparray(nums, 0, 2);
console.log("Swapping the array [10, 20, 30]",nums); // Output: [30, 20, 10]

