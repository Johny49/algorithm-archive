// Plus Minus problem from Hacker Rank

function plusMinus(arr) {
    // ** My Code Here **
    let posArr = arr.filter(function (v) { return v > 0 });
    let negArr = arr.filter(function (v) { return v < 0 });

    console.log((posArr.length / arr.length).toFixed(6));
    console.log((negArr.length / arr.length).toFixed(6));
    console.log(((arr.length - posArr.length - negArr.length) / arr.length).toFixed(6));
    // ** End My Code **
}

// TEST CASES
const testArr = [1, 1, 0, -1, -1];
plusMinus(testArr);

const anotherTest = [2, 34, 56, 0, -87, -9, 0, -67, 37];
plusMinus(anotherTest);
