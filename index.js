const burgerBtn = document.querySelector("#menu-show");
const menuHide = document.querySelector("#menu-hide");
const mobileMenu = document.querySelector("#mobile-menu");

const fullName = document.querySelector("#full-name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const fullNameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");
const submit = document.querySelector("#submit");

const wrapper = document.querySelector(".contact-form-wrapper");
const feedbackContainer = document.querySelector(".feedback-container");
// const menuLink = document.querySelector("#menuLink");


const addToCartButtons = document.querySelectorAll(".add-to-cart");

emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

burgerBtn.addEventListener('click', () =>{
    mobileMenu.classList.remove("hide");
    burgerBtn.classList.add("hide");
    menuHide.classList.remove("hide");
});

menuHide.addEventListener('click', () =>{
    mobileMenu.classList.add("hide");
    burgerBtn.classList.remove("hide");
    menuHide.classList.add("hide");
});

// menuLink.addEventListener("click", ()=>{
//     mobile-menu.classList.remove("active");
// });


addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.textContent = "Added ✓";
    button.classList.add("added");
    const menuCard = button.closest(".menu-card");
    const cartCount = menuCard.querySelector(".item-in-cart");
    cartCount.classList.remove("hide");

    setTimeout(() => {
      button.textContent = "Add to Cart" ;
      button.classList.remove("added");
    }, 1000);

    let count = Number(cartCount.dataset.count);

    count++;

    cartCount.dataset.count = count;
    cartCount.textContent = `× ${count} in cart`;
  });
});

const handleSubmitForm = (e) => {
    e.preventDefault();
    if(fullName.value === "") {
        fullNameError.classList.remove("hide");
        fullName.classList.add("input-red");
    }

    if (email.value === "") {
        emailError.textContent = "Your email is required.";
        emailError.classList.remove("hide");
        email.classList.add("input-red");
    }

    if (message.value === "") {
      messageError.classList.remove("hide");
      message.classList.add("input-red");
    }

    else if(email.value !== "" && !emailRegex.test(email.value)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.classList.remove("hide");
        email.classList.add("input-red");
    }


    else if(message.value !== "" && message.value.length < 10) {
        messageError.textContent = "Message must be at least 10 characters long.";
        messageError.classList.remove("hide");
        message.classList.add("input-red");
    }

    else{
        wrapper.classList.add("hide");
        feedbackContainer.classList.remove("hide");
        email.value = "";
        fullName.value = "";
        message.value = "";
    }
}

const handleResetForm = () => {
    wrapper.classList.remove("hide");
    feedbackContainer.classList.add("hide");
}


const handleNamechange = (value) => {
    if(value === "name") {
        fullNameError.classList.add("hide");
        fullName.classList.remove("input-red");
    }

    if (value === "email") {
      emailError.classList.add("hide");
      email.classList.remove("input-red");
    }

    if (value === "message") {
      messageError.classList.add("hide");
      message.classList.remove("input-red");
    }
    
}