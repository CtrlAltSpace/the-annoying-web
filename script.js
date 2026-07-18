let timer;

function startTimer() {
    clearTimeout(timer);

    timer = setTimeout(function () {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }, 5000);
}

document.addEventListener("mousemove", startTimer);
document.addEventListener("scroll", startTimer);

startTimer();