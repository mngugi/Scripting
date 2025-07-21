funntion sumArray(Array, n){
    n = 0;
    for (let i =0; i < n ; i ++){
        n += Array[i];
    }
    return n;   
}
console.log(sumArray([1, 2, 3, 4, 5], 5)); // Output: 15