btn = document.querySelector(".js-profile-editable-edit-button");
if (btn && btn.textContent === "Edit") {
    colorify();
}

function colorify() {
    contri = document.querySelectorAll("rect.day");
    for (i in contri) {
        contri[i].setAttribute('fill', '#196127')
    }
}