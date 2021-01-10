// 1. Words Tracker 

function wordTracker(arr) {
    let searchWords = arr.shift();
    let wordList = {};
    for (let word of searchWords.split(" ")) {
        wordList[word] = 0;
    }

    for (let part of arr) {
        wordList.hasOwnProperty(part) ? (wordList[part] += 1) : "";
    }

    let sorted = Object.keys(wordList).sort((a, b) => wordList[b] - wordList[a]);

    for (let print of sorted) {
        console.log(`${print} - ${wordList[print]}`);
    }
}

wordTracker([
    "this sentence",
    "In",
    "this",
    "sentence",
    "you",
    "have",
    "to",
    "count",
    "the",
    "occurances",
    "of",
    "the",
    "words",
    "this",
    "and",
    "sentence",
    "because",
    "this",
    "is",
    "your",
    "task",
    "sentence",
    "sentence"
]);
