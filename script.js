function toggleOnClick(selector, toggleClass) {
    document.querySelectorAll(selector).forEach(el =>
        el.addEventListener("click", function () {
            this.classList.toggle(toggleClass);
        })
    );
}

toggleOnClick(".eye", "blink");
toggleOnClick(".mouth", "smile");
toggleOnClick(".body", "shake");
toggleOnClick(".arm", "wave");
toggleOnClick(".leg", "kick");
toggleOnClick(".hat", "tip");
toggleOnClick(".shoe", "tap");
