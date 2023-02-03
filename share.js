// establish the connection with the database and create client
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabase = createClient('https://vmafcgiotxmfbwcqrifn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtYWZjZ2lvdHhtZmJ3Y3FyaWZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ4OTk4OTcsImV4cCI6MTk5MDQ3NTg5N30.aUV6EOA449unU2Nb8mprEu0_yHafI9_MeZYVL_F-sUw')

// ---------------------------------------------

// ---------------------------------------------

// Supabase Magic Link sign in and sign out
let currentUserEmail;

async function getEmail() {
    currentUserEmail = prompt("Enter your email to receive the Magic Link:");
    const { data, error } = await supabase.auth.signInWithOtp({
    email: currentUserEmail,
    options: {
        emailRedirectTo: 'https://linkks.netlify.app/',
        // later redirects to share page
    },
    })
}

// document.getElementById('logoutBtn').addEventListener("click", async function signout() {
//     const { error } = await supabase.auth.signOut();
// });

// ----------------------------------

async function shareLinks() {
    // --------------------------------------------------------
    // database functionality

    const listTitle = document.getElementById("titleBox");
    const listTitleValue = listTitle.value;

    const linkSection = document.getElementById("link-section");
    const links = [];

    // for loop runs through linkSection picking out each link element and adds it to array links []
    for (let i = 0; i < linkSection.children.length; i++) {
        const child = linkSection.children[i];
        if (child.tagName === 'A') {
        links.push(child.href);
        }
    }

    console.log(links);

// ------------------------------------------------


    // inserts list title along with links array to database
    const { data, error } = await supabase
        .from('linkks_local')
        .insert(
            { list_title: listTitleValue, 
            links_array: [links], 
            user_email: currentUserEmail }
            ); 

        // Did it work?
        console.log(data, error);
    }




    // when share button is clicked run ShareLinks function 
    document.querySelector("#shareBtn").addEventListener("click", function(event) {
        shareLinks();
    });







