//1. Reveal Words 
function revealWords(words, text) {
    words = words.split(", ");
    for (let word of words) {
        let regex = /\*+/;
        text = text.replace(regex, word);
    }
    console.log(text);
}

revealWords(
    "great, learning, programming",
    "softuni is ***** place for ******** new *********** languages"
);
