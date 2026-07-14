const moodButtons = document.querySelectorAll(".md-button");
const moodMessage = document.getElementById("mood-msg");

const messages = {
    "😊 Great": "Fantastic ! Keep up the great work!",
    "🙂 Good": "Nice! Keep moving towards your Goals.",
    "😐 Okay": "Everyday is a new opportunity to improve.",
    "🙁 Stressed": "Take a short break and remember to breathe.",
    "😞 Exhausted": "Rest is important. Dont forget to take care of yourself."
};
moodButtons.forEach(function(button){
    button.addEventListener("click", function(){
        moodMessage.textContent = messages[button.textContent];
    });
});

const breathTest = document.getElementById("test");
const breathBtn = document.getElementById("breath-btn");

breathBtn.addEventListener("click", function(){
    breathTest.textContent = "Breathe In...";

    setTimeout(function(){
        breathTest.textContent = "Hold...";
    },4000);

    setTimeout(function(){
        breathTest.textContent = "Breathe Out...";
    },8000);

    setTimeout(function(){
        breathTest.textContent = "Great Job...";
    },12000);
});

const quoteButton = document.getElementById("quote-btn");
const quote = document.getElementById("quote");

const quotes = [
    "Success is the sum of small efforts repeated everyday.",
    "Believe you can and you are halfway there.",
    "Stay focused on your goals.",
    "Progress is better than perfection.",
    "Your future is created by what you do today."
];
quoteButton.addEventListener("click", function(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[randomIndex];
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