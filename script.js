const assignmentInput = document.getElementById('Assignment-name');
const dueDateInput = document.getElementById('due-date');
const addButton = document.getElementById('add-btn');
const assignmentList = document.getElementById('assignment-list');


addButton.addEventListener("click", function(){
    const assignment = assignmentInput.value;
    const dueDate = dueDateInput.value;
    if (assignment === "" || dueDate === "") {
        alert("Please fill in both fields.");
        return;
    }
    const listItem = document.createElement("li");
    listItem.innerHTML = `${assignment} - Due: ${dueDate}
    <button class="complete-btn">Complete</button>
    <button class="delete-btn">Delete</button>`;
    assignmentList.appendChild(listItem);
    assignmentInput.value = "";
    dueDateInput.value = "";
});
 assignmentList.addEventListener("click", function(event){
        if(event.target.classList.contains("delete-btn")){
            event.target.parentElement.remove();
        }
        if(event.target.classList.contains("complete-btn")){
            event.target.parentElement.classList.toggle("completed");
        }
    });

const taskInput = document.getElementById("task");
const addTaskbtn = document.getElementById("one-btn");
const taskList = document.getElementById("task-list");
addTaskbtn.addEventListener("click", function(){
    const task = taskInput.value;
    if (task === ""){
        alert("please fill in the blank field");
        return;
    }
    const addlistItem = document.createElement("li");
    addlistItem.innerHTML = `${task} <button class="complete-btn">Complete</button>
    <button class="delete-btn">Delete</button>`;
    taskList.appendChild(addlistItem);
    taskInput.value = "";
    
});
taskList.addEventListener("click", function(event){
        if(event.target.classList.contains("delete-btn")){
            event.target.parentElement.remove();
        }
        if(event.target.classList.contains("complete-btn")){
            event.target.parentElement.classList.toggle("completed");
        }
    });

const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start-btn");
const endButton = document.getElementById("end-btn");
const resetButton = document.getElementById("reset-btn");

let timeleft = 30 * 60 // 30 minutes in seconds
let timerBreak;

function updateTimerDisplay() {
    let mins = Math.floor(timeleft / 60);
    let secs = timeleft % 60;
    timerDisplay.textContent = `${mins}:${secs < 10 ? '0' : ""}${secs}`;
    if (timeleft <= 0) {
        clearInterval(timerBreak);
        alert("Time's up! Take a break.");
        return;
    }
    timeleft--;
}
startButton.addEventListener("click", function() {
    timerBreak = setInterval(updateTimerDisplay, 1000);
});
endButton.addEventListener("click", function() {
    clearInterval(timerBreak);
})
resetButton.addEventListener("click", function(){
    clearInterval(timerBreak);
    timeleft = 30 * 60;
    timerDisplay.textContent = "30:00";
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