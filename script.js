const MagicButton = document.getElementById("button1");

function UserClicksButton() {
    alert("You Pressed the Button");
}

MagicButton.addEventListener("click", UserClicksButton, false);