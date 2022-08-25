const btnSwitchEls = document.querySelectorAll(".btn__box button");
const formEls = document.querySelectorAll("form");

btnSwitchEls.forEach(el => {
    el.addEventListener("click", event => {
        let btn = event.target.dataset.btn;
        for (let form of formEls) {
            if (form.classList.contains(btn)) {
                form.classList.remove("hidden");
            } else {
                form.classList.add("hidden");
            }
        }
    });
});