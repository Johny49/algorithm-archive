//  Check if a word is a palindrome and return true or false

function checkPalindrome(word) {
    let backwards = "";

    for (let i = word.length - 1; i >= 0; i--) {
        backwards += word[i];
    }
    return word === backwards;
}

console.log(checkPalindrome("noon"));
console.log(checkPalindrome("horse"));
console.log(checkPalindrome("racecar"));
console.log(checkPalindrome("tattarrattat"));