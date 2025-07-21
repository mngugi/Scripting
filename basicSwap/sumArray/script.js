function arraySum(Array, n){
    n = 0;
    for (let i =0; i < n ; i ++){
        n = n + Array[i];
    }
    return n;   
}
console.log(arraySum(5)); // Output: 15