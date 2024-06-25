// const inputbox = document.getElementById("input-box")
// const listcontainer = document.getElementById("list-container")
// function addTask(){
//     if(inputbox.value === ''){
//         alert("you must write something")
 
//     }
//     else{
//         let li = document.createElement("li")
//         li.innerHTML = inputbox.value;
//         listcontainer.appendChild(li);
//     }
// }
// const inputbox = document.getElementById("input-box");
// const listcontainer = document.getElementById("list-container");

// function addTask() {
//     if (inputbox.value.trim() === '') { // trim() removes whitespace from both ends of a string
//         alert("You must write something");
//     } else {
//         let li = document.createElement("li");
//         li.innerHTML = inputbox.value;
//         // li.textContent = inputbox.value;
//         listcontainer.appendChild(li);
//         inputbox.value = ''; // Clear the input box after adding the task
//         let span = document.createElement("span")
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//     }

//     inputbox.value= "";
// }
// listcontainer.addEventListener("click",function(e){
//     if(
//         e.target.tagName ==="LI"){

//             e.target.classList.togggle("checked")
//             saveData();
//         }
//         else if(e.target.tagName ==="SPAN"){
//             e.target.parentElement.remove();
//             saveData();
//         }
//    },false );
// function saveData(){
//     localstorage.setItem("data",listcontainer.innerHTML)
// }
// function showTask(){
//     listcontainer.innerHTML = localstorage.getItem("data")
// }

const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask() {
    if (inputbox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.textContent = inputbox.value; // Use textContent instead of innerHTML for security
        listcontainer.appendChild(li);
        inputbox.value = ''; // Clear the input box after adding the task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for multiplication sign
        li.appendChild(span);
        saveData();
    }
}

listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, true);

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data") || "";
}

// Load the tasks when the page loads
document.addEventListener("DOMContentLoaded", showTask);

