var isPalindrome = function(x) {
    const arr = x.toString().split("");
    const half = Math.ceil(arr.length / 2);
    
    const firstHalf = arr.slice(0, half);
    const secondHalf = arr.slice(-half).reverse();
    
    for (let i = 0; i < firstHalf.length; i++) {
        if (firstHalf[i] !== secondHalf[i]) return false;
    }
    
    return true;
};