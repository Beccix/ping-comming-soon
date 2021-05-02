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
        if (window.matchMedia("(max-width: 40rem)").matches) {
          return errorMessageMobile()
        } else {
          return errorMessageDesktop()
        }
}

function errorMessageDesktop() {
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

function errorMessageMobile() {
    let errosMobile = document.querySelector(".invalid-text-mobile");
    let formControl = document.querySelector(".form-control");
    let formContainer = document.querySelector(".form-container");

    if ((errosMobile .classList.contains("error-hide"))) {
        errosMobile .classList.add("error-show")
        errosMobile .classList.remove("error-hide")
        formControl.classList.add("invalid");
        formContainer.classList.add("invalid-form");
    } else {
        errosMobile .classList.remove("error-show")
        errosMobile .classList.add("error-hide")
        formControl.classList.remove("invalid");
        formContainer.classList.remove("invalid-form");
    }
}

document.addEventListener("DOMContentLoaded", trigger, false);

function submit() {
    console.log("a")
}