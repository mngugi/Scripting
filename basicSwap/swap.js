function swap(a,b) {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
    
}
console.log("Swapping 5 and 10:", swap(5, 10));