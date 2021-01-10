//3. Extract File 
function extractFile(str) {
    let last = str.lastIndexOf("\\");
    let lastPoint = str.lastIndexOf(".");

    let filePrint = str.substring(last + 1, lastPoint);
    let filePrint2 = str.substring(lastPoint + 1);
    console.log(`File name: ${filePrint}`);
    console.log(`File extension: ${filePrint2}`);
}

extractFile("C:\\Internal\\training-internal\\Template.pptx");
extractFile("C:\\Projects\\Data-Structures\\LinkedList.cs");
