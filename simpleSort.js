let nums = [245,154, 123,1337];

nums.sort(function (a,b) {
    return a - b;

    
});
console.log(nums);

consolelog("------------------------------------------------------");

function wordSort(){
    let words= ["Vim, Emacs", "VSCode", "Sublime Text", "Atom"];
    words.sort(function (a, b) {
        return a.localeCompare(b);
    });
   
};
 console.log(words);
