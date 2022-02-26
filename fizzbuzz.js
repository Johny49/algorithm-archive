// FIZZ BUZZ on given array
function fizzBuzzArr(arr) {
    for (const num of arr) {
        if ((num % 3 === 0) && (num % 5 === 0)) console.log("FizzBuzz");
        else if (num % 5 === 0) console.log("Buzz");
        else if (num % 3 === 0) console.log("Fizz");
        else console.log(num);
    }
};

console.log("Output for array:")
fizzBuzzArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 45, 50, 60]);

// FIZZ BUZZ up to a given number
function fizzBuzz(num) {
    let i = 0;
    while (i <= num) {
        if ((i % 3 === 0) && (i % 5 === 0)) console.log("FizzBuzz");
        else if (i % 5 === 0) console.log("Buzz");
        else if (i % 3 === 0) console.log("Fizz");
        else console.log(i);
        i++;
    }
}

console.log("Output up to a number:")
fizzBuzz(37);
