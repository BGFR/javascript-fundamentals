//4. String Substring 
function stringSubstring(word, str) {
    str = str.toLowerCase().split(" ");

    str.includes(word.toLowerCase())
        ? console.log(word)
        : console.log(`${word} not found!`);
}

stringSubstring("javascript", "JavaScriptis the best programming language");
stringSubstring("python", "JavaScript is the best programming language");
