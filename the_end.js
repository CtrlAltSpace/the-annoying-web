setTimeout(() => {
    document.getElementById("fade").classList.add("active");

    setTimeout(() => {
        window.location.href = "the_end.html";
    }, 3000);

}, 3000);

const audio = document.getElementById("rimshot");

audio.addEventListener("canplaythrough", () => {
    audio.play().catch(console.error);
});