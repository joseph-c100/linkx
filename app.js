
// function that takes value of textbox and inserts it into the div link-section

function insertText() {
    var textbox = document.getElementById("textbox");
    var text = textbox.value;
    var linkSection = document.getElementById("link-section");
    linkSection.innerHTML = text;
}


