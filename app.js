

// google sign in and sign out
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


