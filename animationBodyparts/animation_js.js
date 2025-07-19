    var eyes = document.querySelectorAll(".eye");
    eyes.forEach(function(eye) {
        eye.addEventListener("click", function() {
            this.classList.toggle("blink");
        });
    }       
    );
    var mouth = document.querySelector(".mouth");
    mouth.addEventListener("click", function() {
        this.classList.toggle("smile");
    });
    var body = document.querySelector(".body");
    body.addEventListener("click", function() {
        this.classList.toggle("shake");
    });
    var arms = document.querySelectorAll(".arm");
    arms.forEach(function(arm) {
        arm.addEventListener("click", function() {
            this.classList.toggle("wave");
        });
    }
    );
    var legs = document.querySelectorAll(".leg");
    legs.forEach(function(leg) {
        leg.addEventListener("click", function() {
            this.classList.toggle("kick");
        });
    }
    );
    var hat = document.querySelector(".hat");
    hat.addEventListener("click", function() {
        this.classList.toggle("tip");
    }
    );
    var shoes = document.querySelectorAll(".shoe");
    shoes.forEach(function(shoe) {
        shoe.addEventListener("click", function() {
            this.classList.toggle("tap");
        });
    }
    );   
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
  