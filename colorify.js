btn = document.querySelector(".js-profile-editable-edit-button");
// Check if it is the user profile by checking Edit profile button
if (btn && btn.textContent === "Edit") {
    colorify();
}

function colorify() {
    // Find the contribution boxes
    contri = document.querySelectorAll("rect.day");
    if (contri.length > 0) {
        // if exists, change every color to green
        contri.forEach(box => {
            box.setAttribute('fill', '#196127')
        })
    }
}