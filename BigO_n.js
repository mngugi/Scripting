
/* O(1) does not change with respect to input space. Hence, O(1) is referred
to as being constant time. An example of an O(1) algorithm is accessing an
item in the array by its index. O(n) is linear time and applies to  
algorithms that must do n operations in the worst-case scenario. 
An example of an O(n) algorithm is printing numbers from 0 to n-1,  
as shown here: */

console.log("--------------------Example------------------------------"); 

// O(1): Constant Time Example
let array = [10, 20, 30, 40];
console.log("O(1) - Constant time example:", array[2]); // Access by index (constant time)
console.log("O(1) - Constant time example:", array[1]); // Access by index (constant time)

console.log("--------------------------------------------------"); 

function exampleLinear(n) {
    for (var i = 0; i < n; i++) {
        console.log("This is a linear time complexity example.", i);
    }
}
exampleQuadratic(5); // Example with n = 5


console.log("--------------------------------------------------"); 
/** Similarly, O(n2) is quadratic time, and O(n3) is cubic time. 
 * Examples  of these complexities are shown here: */
function exampleQuadratic(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            console.log("This is a quadratic time complexity example.", i, j);
        }
    }
}
exampleQuadratic(3); // Example with n = 3

console.log("--------------------------------------------------");  

function exampleCubic(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            for (var k = 0; k < n; k++) {
                console.log("This is a cubic time complexity example.", i, j, k);
            }
        }
    }
}
exampleCubic(2); // Example with n = 2  
console.log("--------------------------------------------------");

/* O(log n) is logarithmic time, which is faster than linear time. 
 * An example of an O(log n) algorithm is binary search, where the input size is halved at each step. 
 * Here is a simple example of logarithmic time complexity: */

function exampleLogarithmic(n) {
    let i = 1;
    while (i < n) {
        console.log("This is a logarithmic time complexity example.", i);
        i *= 2; // Doubling i each time
    }
}
exampleLogarithmic(16); // Example with n = 16
console.log("--------------------------------------------------");

// Rules of Big O Notation
console.log("------------------------Example-------------------------");
console.log("Big O Notation Rules:");
function printTwice(n) {
    for (let i = 0; i < 2 * n; i++) {
        console.log(i);
    }
}
printTwice(5); // Example with n = 5
/**Big-O focuses on the dominant term as 
𝑛
→
∞
n→∞, and constants do not affect which term grows the fastest. Hence, constants are "eliminated" from the analysis.

 */