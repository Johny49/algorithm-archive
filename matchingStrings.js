// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.
// Example
// strings = ['ab',' ab',abc']
// queries = ['ab',' abc',' bc'] 
// The function must return an array of integers representing the frequency of occurrence of each query string in strings.
// matchingStrings has the following parameters:
// string strings[n] - an array of strings to search
// string queries[q] - an array of query strings
// Returns int[q]: an array of results for each query
// Constraints: 1 <= n <= 1000; 1 <= q <= 1000; 1 <= |strings[i]|,\queries[i]| <= 20;

function matchingStrings(strings, queries) {
    let countArr = [];
    // iterate through each query
    for (const query of queries) {
        let count = 0;
        // iterate strings and compare to query
        for (const str of strings) {
            // add to count if matches
            (str === query) ? count++ : null;
        }
        // push to array
        countArr.push(count);
    }
    return countArr;
}

// sampleInput 1
let stringsA = ['aba', 'baba', 'aba', 'xzxb'];
let queriesA = ['aba', 'xzxb', 'ab'];

console.log(matchingStrings(stringsA, queriesA));
// Expected Output
// 2
// 1
// 0

// sampleInput 2
let stringsB = ['def', 'de', 'fgh'];
let queriesB = ['de', 'lmn', 'fgh'];

console.log(matchingStrings(stringsB, queriesB));
// Expected Output
// 1
// 0
// 1

// sampleInput 3
let stringsC = ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf', 'na', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf'];
let queriesC = ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn'];

console.log(matchingStrings(stringsC, queriesC));
// Expected Output
// 1
// 3
// 4
// 3
// 2