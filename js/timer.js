let inputSeconds = document.querySelector("#seconds");
let inputMinutes = document.querySelector("#minutes");
let intervalId;

document.querySelector(".start").addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = setInterval(timer, 1000);
});

document.querySelector(".pause").addEventListener("click", () => {
    clearInterval(intervalId);
});

document.querySelector(".stop").addEventListener("click", () => {
    clearInterval(intervalId);
    inputSeconds.value = "";
    inputMinutes.value = "";
});

function timer() {
    let secValue = +inputSeconds.value;
    let minValue = +inputMinutes.value;
    if (secValue === 0 && minValue === 0) {
        return;
    }
    if (secValue === 0 && (minValue > 0 || minValue === "")) {
        minValue--;
        inputMinutes.value = minValue;
        secValue = 60;
    }
    secValue--;
    inputSeconds.value = secValue;
}