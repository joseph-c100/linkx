// establish the connection with the database and create client
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabase = createClient('https://vmafcgiotxmfbwcqrifn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtYWZjZ2lvdHhtZmJ3Y3FyaWZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ4OTk4OTcsImV4cCI6MTk5MDQ3NTg5N30.aUV6EOA449unU2Nb8mprEu0_yHafI9_MeZYVL_F-sUw')

// ---------------------------------------------

// ---------------------------------------------

// Supabase Magic Link sign in and sign out

document.getElementById('loginBtn').addEventListener("click", async function signInWithEmail() {
    let currentUserEmail = prompt("Enter your email to receive the Magic Link:");
    const { data, error } = await supabase.auth.signInWithOtp({
    email: currentUserEmail,
    options: {
        emailRedirectTo: 'http://127.0.0.1:5500/app.html',
    },
    })
})

document.getElementById('logoutBtn').addEventListener("click", async function signout() {
    const { error } = await supabase.auth.signOut();
});

// ----------------------------------

