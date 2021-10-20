import {addTask} from './taskController';

let bodyDiv = "";
let navDiv = "";
let contentDiv = "";
let listTitle = "";


function updateTitle(newListTitle) {
    listTitle.textContent = newListTitle;
}

function cancelForm(e){
    const formCancelled = e.target.parentElement;
    formCancelled.reset();
    formCancelled.style.display = "none";
}

function displayNewTaskInput(){
    const inputForm = bodyDiv.querySelector('#taskForm');
    inputForm.style.display = "inline-block";
}

function confirmAddTask(e){
    const inputForm = e.target.parentElement;
    const taskTitle = inputForm.querySelector('#taskTitle').value;
    const addedTask = addTask(taskTitle);
    addTaskToDisplay(addedTask);
    inputForm.reset();
    inputForm.style.display = "none";
}

function displayNewProjectinput(){
    alert('newProject');
}

function displayNewFavoriteInput(){
    alert('newFavorite');
}

function attachEvents(){
    const newTaskButton = contentDiv.querySelector('.newTaskButton');
    newTaskButton.addEventListener('click', displayNewTaskInput);
    const newProjectButton = navDiv.querySelector('.newProjectButton');
    newProjectButton.addEventListener('click', displayNewProjectinput);
    const newFavoriteButton = navDiv.querySelector('.newFavoriteButton');
    newFavoriteButton.addEventListener('click', displayNewFavoriteInput);
    const cancelFormButton = bodyDiv.querySelector('.cancelFormButton');
    cancelFormButton.addEventListener('click', cancelForm);
    const addTaskButton = bodyDiv.querySelector('.addTaskButton');
    addTaskButton.addEventListener('click', confirmAddTask);
}

//Initial div collection, potential for optimization here
function collectDivs() {
    bodyDiv = document.body;
    navDiv = bodyDiv.querySelector('#navigation');
    contentDiv = bodyDiv.querySelector('#centerContent');
    listTitle = contentDiv.querySelector('#listTitle');
}

//Add an individual task to the task display
function addTaskToDisplay(task) {
    console.log("Adding task to display");
    const addedTask = document.createElement('div');
        addedTask.classList.add('taskSimple');
        const titleText = document.createElement('p');
        titleText.textContent = task.getTitle();
        addedTask.appendChild(titleText);
        contentDiv.appendChild(addedTask);
}

//Update the full task list
function updateTaskDisplay(taskList) {
    taskList.forEach(task => {
        addTaskToDisplay(task);
    });
}

function initDisplay(){
   collectDivs(); 
   attachEvents();
}

export {initDisplay, addTaskToDisplay, updateTaskDisplay, updateTitle};