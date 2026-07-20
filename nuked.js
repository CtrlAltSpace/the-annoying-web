const button = document.getElementById("nuhuh");

const messages = [
    "Nuh uh!",
    "Nope!",
    "Yeah yeah, no!",
    "*sigh*, you still don't understand, do you?",
    "You really don't get it, do you?",
    "Hey, it's not me that doesn't want to make you go back, I just CAN'T",
    "Ughhhh! STOP, CLICKING, MEEE!!!"
];

let clickCount = 0;

button.addEventListener("click", function () {
    if (clickCount < messages.length) {
        alert(messages[clickCount]);
        button.textContent = messages[clickCount];
        clickCount++;
    } else {
        window.open("ending.html");
    }
});