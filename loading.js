const bar = document.getElementById("loading-bar");
const percent = document.getElementById("loading-text");
const status = document.getElementById("status-text");

const steps = [
    { p: 2, d: 150, s: "Contacting the internet..." },
    { p: 7, d: 200 },
    { p: 13, d: 350, s: "Negotiating with the internet..." },
    { p: 13, d: 600 },
    { p: 18, d: 180, s: "Requesting permission to self-destruct..." },
    { p: 25, d: 150 },
    { p: 33, d: 250, s: "Permission denied." },
    { p: 41, d: 180 },
    { p: 48, d: 500, s: "Requesting permission again..." },
    { p: 56, d: 180 },
    { p: 65, d: 500, s: "Bribing the server..." },
    { p: 72, d: 400 },
    { p: 80, d: 700, s: "Bribe accepted." },

    { p: 82, d: 250, s: "Downloading explosives..." },
    { p: 84, d: 350 },
    { p: 87, d: 400, s: "Explosives not found." },
    { p: 91, d: 300, s: "Building explosives..." },
    { p: 94, d: 500 },
    { p: 96, d: 500, s: "Calibrating the nuke..." },
    { p: 97, d: 700 },
    { p: 98, d: 900, s: "Checking safety regulations..." },
    { p: 99, d: 1200, s: "Ignoring safety regulations..." },
    { p: 99.5, d: 900 },
    { p: 99.8, d: 1700, s: "Launching launch sequence..." },
    { p: 99.9, d: 1300 },
    { p: 99.99, d: 1500, s: "Locating the launch button..." },

    { p: 80, d: 1200, s: "Oops." },

    { p: 90, d: 900, s: "Recovering from the oops..." },
    { p: 95, d: 500, s: "The intern unplugged something..." },
    { p: 98, d: 600, s: "Plugging it back in..." },
    { p: 99, d: 800, s: "Trying again..." },

    { p: 80, d: 1200, s: "Oops. I'm really really sorry." },

    { p: 90, d: 500, s: "Recovering from the oops... (again)" },
    { p: 95, d: 700, s: "Calling tech support..." },
    { p: 98, d: 200, s: "Tech support is on lunch break." },
    { p: 99, d: 1000, s: "Fixing it ourselves..." },
    { p: 99.9, d: 900, s: "Almost there..." },
    { p: 99.99, d: 1000, s: "Actually almost there..." },

    { p: "99.999", d: 700, s: "Adding another 9..." },
    { p: "99.9999", d: 700, s: "Need more precision..." },
    { p: "99.99999", d: 700, s: "Still not enough..." },
    { p: "99.999999", d: 700, s: "Consulting mathematicians..." },
    { p: "99.9999999", d: 700, s: "They asked for another 9." },
    { p: "99.99999999", d: 900, s: "Adding another 9..." },
    { p: "99.999999999", d: 1000, s: "Downloading extra percentage..." },
    { p: "99.9999999999", d: 150000, s: "99% of the way to 100%..." },
    { p: "99.99999999999", d: 0, s: "Website successfully nuked." }
];

let i = 0;

function nextStep() {

    const step = steps[i];

    if (step.s)
        status.textContent = step.s;

    percent.textContent = step.p + "%";

    let width = parseFloat(step.p);

    if (width > 99.5) {
        width = 99.5;
    }

    bar.style.width = width + "%";

    i++;

    if (i >= steps.length) {

        bar.style.width = "100%";
        percent.textContent = "100%";

        setTimeout(() => {
            window.location.href = "nuked.html";
        }, 2000);

        return;
    }

    const speed = 1.5; // 1 = normal, 2 = twice as slow
    setTimeout(nextStep, step.d * speed);
}

nextStep();