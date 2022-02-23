// A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.
// Example s= 'The quick brown fox jumps over the lazy dog'
// Returns: string: pangram || not pangram
// Input format: single line string
// Constraints: 0 < length of s <= 10^3; Each character of s, s[i] ∈ {a-z,A-Z,space}

function pangram(s) {
    // alphabet array for comparison
    let alpha = [...' abcdefghijklmnopqrstuvwxyz'];

    // convert input string to lowercase
    s = s.toLowerCase();
    // use Set to get unique values
    let unique = new Set(s);
    //convert back to array and sort alphabetically
    let uniqueArr = Array.from(unique);
    uniqueArr.sort();

    if (uniqueArr.toString() === alpha.toString()) {
        return "pangram";
    } else {
        return "not pangram";
    }
}

let test = 'The quick brown fox jumps over the lazy dog';
console.log(pangram(test));
