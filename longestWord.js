const longestWord = (sen) => {
    const arr = sen.split(/[ ,.]+/);    //TODO: update to use regex
    let longest = "";

    arr.forEach(word => {
        word.length > longest.length ? longest = word : null;
        console.log("WORD: ", word, "LONGEST:", longest);
    });

    console.log(`The longest word in the sentence is "${longest}"`);
}

let testSentence = "This is a test sentence asf123 Hello world1123 elephant antidisestablishentarianism antibodies.";

longestWord(testSentence);