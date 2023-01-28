// import the supabase library and establish the connection with the database

const { createClient } = supabase
const _supabase = createClient('https://vmafcgiotxmfbwcqrifn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtYWZjZ2lvdHhtZmJ3Y3FyaWZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ4OTk4OTcsImV4cCI6MTk5MDQ3NTg5N30.aUV6EOA449unU2Nb8mprEu0_yHafI9_MeZYVL_F-sUw')

console.log('Supabase Instance: ', _supabase)


// google sign in and sign out - function needs to be called when button is clicked.
async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
    })
}

async function signout() {
    const { error } = await supabase.auth.signOut()
}


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
function insertText() {

    var textbox = document.getElementById("textbox");
    var text = textbox.value;
    var linkSection = document.getElementById("link-section");

    // add textbox text to link section div formatted with a tag and a paragraph break
    linkSection.innerHTML += '<a href="' + text + '">' + text + '</a>' + '<br />';
}


