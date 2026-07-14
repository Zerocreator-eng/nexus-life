const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");
const sendButton = document.getElementById("sent-btn");
const successMessage = document.getElementById("cont-p");

sendButton.addEventListener("click", function () {
    const name = nameInput.value;
    const email = emailInput.value;
    const subject = subjectInput.value;
    const message = messageInput.value;
    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please fill in the information");
    } else {
        successMessage.textContent = "Thank you! your message has been sent succesfully";
        nameInput.value = "";
        emailInput.value = "";
        subjectInput.value = "";
        messageInput.value = "";

        setTimeout(function () {
            successMessage.textContent = "";
        }, 3000);
    };

});
const themeButton = document.getElementById("theme-btn");

themeButton.addEventListener("click", function(){

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        themeButton.textContent = "🌙 Dark Mode";

    }else{

        themeButton.textContent = "☀️ Light Mode";

    }

});
