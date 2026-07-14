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

