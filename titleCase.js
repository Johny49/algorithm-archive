// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function (str) {
    return str.replace(/\w\S*/g,
        function (text) {
            return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
        });
};

console.log(titleCase("open a new browser tab"));
