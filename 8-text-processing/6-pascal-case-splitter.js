//6. Pascal-Case Splitter 
function pascalcaseSplitter(str) {
    let result = "";
    for (let char of str) {
        char.match(/[A-Z]/) ? (result += " " + char) : (result += char);
    }
    console.log(result.trim().split(" ").join(", "));
}

pascalcaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
pascalcaseSplitter("HoldTheDoor");
pascalcaseSplitter("ThisIsSoAnnoyingToDo");
