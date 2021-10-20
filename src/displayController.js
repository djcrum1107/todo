import {addTask, readTasks} from './taskController';

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

//Archive a task based on the button attached to the display of the task
function archiveTask(e) {
    //Pull the parent element based on the button
    const taskToArchiveDiv = e.target.parentElement;
    //Pull the task ID from the class assigned on button creation
    const taskToArchiveID = taskToArchiveDiv.classList[0].split('_')[1];
    readTasks()[taskToArchiveID].changeArchivedStatus();
    updateTaskDisplay(readTasks());
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
    const addedTaskElement = document.createElement('div');
        addedTaskElement.classList.add('taskID_' + task.getTaskID());
        addedTaskElement.classList.add('taskSimple');
        const titleText = document.createElement('p');
        titleText.textContent = task.getTitle();
        const archiveButton = document.createElement('button');
        archiveButton.addEventListener('click', archiveTask);

        addedTaskElement.appendChild(titleText);
        addedTaskElement.appendChild(archiveButton);
        contentDiv.appendChild(addedTaskElement);
}



//Update the full task list excluding those that are archived
function updateTaskDisplay(taskList) {
    console.log(taskList);
    taskList.forEach(task => {
        //Don't show if archived
        if(task.isArchived()){
            return;
        }
        //If the task isn't there based on taskID class add it, otherwise show if it's hidden
        const taskDiv = contentDiv.querySelector('.taskID_' + task.getTaskID());
        if(taskDiv == null) {
            addTaskToDisplay(task);
            return;
        }else {
            taskDiv.display = 'none';
        }
        
    });
}

function initDisplay(){
   collectDivs(); 
   attachEvents();
   updateTaskDisplay(readTasks());
}

export {initDisplay, addTaskToDisplay, updateTaskDisplay, updateTitle};