import throttle from "lodash.throttle";

const feedbackForm = document.querySelector(".feedback-form");
let formState = {email: "", message: ""};

feedbackForm.addEventListener("input", throttle(handleFormInput, 500));
feedbackForm.addEventListener("submit", handleFormSubmit);

if (localStorage.getItem("feedback-form-state")){
    formState = JSON.parse(localStorage.getItem("feedback-form-state"));
    const {elements: { email, message }} = feedbackForm;
    email.value = formState.email;
    message.value = formState.message;
}

function handleFormInput (e)  {
    if (e.target.name === "email") {
        formState.email = e.target.value;
    } else {
        formState.message = e.target.value;
    }
     
    localStorage.setItem("feedback-form-state", JSON.stringify(formState));
};

function handleFormSubmit (e) {
    e.preventDefault();
    console.log(formState);
    formState.email = "";
    formState.message = "";
    localStorage.removeItem("feedback-form-state");
    e.currentTarget.reset();
};