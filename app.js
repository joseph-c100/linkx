
// adds textbox value i.e. the link to link section when user hits enter
document.querySelector("#textbox").addEventListener("keyup", event => {
    if(event.key !== "Enter") return; // Use `.key` instead.
    document.querySelector("#linkBtn").click(); // Things you want to do.
    event.preventDefault(); 
});



// function that takes value of textbox and inserts it into the div link-section
function insertText() {
    var textbox = document.getElementById("textbox");
    var text = textbox.value;
    var linkSection = document.getElementById("link-section");
    // add textbox text to link section div formatted with a tag and a paragraph break
    linkSection.innerHTML += '<a href="' + text + '">' + text + '</a>' + '<br />';
}


// to do
// if add button pressed with no input text then ignore

// correct link format check 
