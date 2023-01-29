import throttle from "lodash.throttle";

const LOCAL_STORAGE_KEY = "feedback-form-state";
const feedbackForm = document.querySelector(".feedback-form");
const {elements: { email, message }} = feedbackForm;
let formState = {email: "", message: ""};

feedbackForm.addEventListener("input", throttle(handleFormInput, 500));
feedbackForm.addEventListener("submit", handleFormSubmit);

if (localStorage.getItem(LOCAL_STORAGE_KEY)){
    formState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    email.value = formState.email;
    message.value = formState.message;
}

function handleFormInput (e)  {
    if (e.target.name === "email") {
        formState.email = e.target.value;
    } else {
        formState.message = e.target.value;
    }
     
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formState));
};

function handleFormSubmit (e) {
    e.preventDefault();
   
    if (email.value === "" || message.value === "") {
        return alert("Заповніть обидва поля форми!");
    }

    console.log(formState);
    formState.email = "";
    formState.message = "";
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    e.currentTarget.reset();
};
