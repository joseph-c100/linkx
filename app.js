// establish the connection with the database and create client
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabase = createClient('https://vmafcgiotxmfbwcqrifn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtYWZjZ2lvdHhtZmJ3Y3FyaWZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ4OTk4OTcsImV4cCI6MTk5MDQ3NTg5N30.aUV6EOA449unU2Nb8mprEu0_yHafI9_MeZYVL_F-sUw')

// ---------------------------------------------

// adds textbox value i.e. the link to link section when user hits enter
document.querySelector("#textbox").addEventListener("keyup", event => {
    if(event.key !== "Enter") return; // Use `.key` instead.
    document.querySelector("#linkBtn").click(); // Things you want to do.
    event.preventDefault(); 
});



// code checks if text input is a valid url, if so it runs the insertText function
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const urlInput = document.querySelector("#textbox");

    if (urlInput.validity.valid) {
        insertText();
    } else {
      // Display an error message
        alert("Please enter a valid URL");
    }
});


// function that takes value of textbox and inserts it into the div link-section
async function insertText() {

    var textbox = document.getElementById("textbox");
    var text = textbox.value;
    var linkSection = document.getElementById("link-section");

    var listTitle = document.getElementById("titleBox");
    var listTitleValue = listTitle.value;

    // add textbox text to link section div formatted with a tag and a paragraph break
    linkSection.innerHTML += '<a href="' + text + '">' + text + '</a>' + '<br />';

    // --------------------------------------------------------
    // database functionality

    // inserts added link and list title to database under saved_links
    const { data, error } = await supabase
    .from('linkks_local')
    .insert([
        { list_title: listTitleValue, saved_links: text}
    ]);

    // Did it work?
    console.log(data, error);

}


