const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// To add task along with the delete option
function addTask() {
    if (inputBox.value === "") {
        alert("You must enter something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// To check/uncheck the task added along with removing the task
listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        // console.log(e.target);
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//To save the tasks in localStorage of the user's browser and to prevent automatic deletion of data when refreshed the page 
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

// To show the tasks when the app is opened
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask()