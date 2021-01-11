//6.  Extract Emails 
function extractEmail([arr]) {
    let pattern = /\s+([A-Za-z0-9]+[\.\-_]?[A-Za-z0-9]+)@([A-Za-z]+[\-]?[A-Za-z]+)\.?[A-Za-z]+?\.[a-z]+\b/g;

    let matches = arr.match(pattern);
    if (matches) {
        for (let match of matches) {
            console.log(match.trim());
        }
    }
}

extractEmail(["Please contact us at: support@github.com.", "end"]);
extractEmail([
    "Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.",
    "end"
]);
extractEmail([
    "Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.",
    "end"
]);
