
// console.log("script1.js load");

function ein_div() {
    console.log("ein_div")
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode("ein_div div");
    newDiv.appendChild(newContent);
    document.body.appendChild(newDiv);
    console.log("ein_div ende");
};
