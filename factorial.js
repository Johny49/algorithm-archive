// Create a function that returns the factorial of `num`
// If given `0`, the factorial should be `1`. Otherwise, assume that the given number will be a whole positive number.

var factorial = function (num) {
    if (num === 0) {
        return 1;
    } else {
        let fac = 1;
        for (let i = 1; i <= num; i++) {
            fac = fac * i;
        }
        return fac;
    }
};

console.log(factorial(4));
console.log(factorial(0));