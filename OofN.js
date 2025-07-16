
/* O(1) does not change with respect to input space. Hence, O(1) is referred
to as being constant time. An example of an O(1) algorithm is accessing an
item in the array by its index. O(n) is linear time and applies to  
algorithms that must do n operations in the worst-case scenario. 
An example of an O(n) algorithm is printing numbers from 0 to n-1,  
as shown here: */

function exampleLinear(n) {
    for (var i = 0; i < n; i++) {
        console.log("This is a linear time complexity example.", i);
    }
}
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
console.log("--------------------------------------------------");  