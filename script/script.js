let input = document.querySelector(".form-control")

function trigger() {
    let button = document.querySelector(".button-submit");
    button.addEventListener("click", validate, false);
}

function validate() {
    let input = document.querySelector(".form-control") 
    if (input.value.length == 0 || input.value.includes("@")) {
        input.value = "example@email.com"
        return checksize()
    } else {
        return input.value
    }
}

function checksize() {
    window.addEventListener("resize", function() {
        if (window.matchMedia("(max-width: 40rem)").matches) {
          console.log("mobile")
        } else {
          console.log("desktop")
        }
      }) 
}

function errorMessage() {
    let errosMobile = document.querySelector(".invalid-text-mobile");
    let errosDesktop = document.querySelector(".invalid-text-desktop");
    let formControl = document.querySelector(".form-control");
    let formContainer = document.querySelector(".form-container");

    if ((errosDesktop.classList.contains("error-hide"))) {
        errosDesktop.classList.add("error-show")
        errosDesktop.classList.remove("error-hide")
        formControl.classList.add("invalid");
        formContainer.classList.add("invalid-form");
    } else {
        errosDesktop.classList.remove("error-show")
        errosDesktop.classList.add("error-hide")
        formControl.classList.remove("invalid");
        formContainer.classList.remove("invalid-form");
    }
}

document.addEventListener("DOMContentLoaded", trigger, false);

function submit() {
    console.log("a")
}