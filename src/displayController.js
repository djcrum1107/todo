import {addTask} from './displayController';

let bodyDiv = "";
let navDiv = "";
let contentDiv = "";
let listTitle = "";


function updateTitle(newListTitle) {
    listTitle.textContent = newListTitle;
}

function displayNewTaskInput(){
    bodyDiv.querySelector('#inputForm').style.display = "block";
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
}

//Initial div collection, potential for optimization here
function collectDivs() {
    bodyDiv = document.body;
    navDiv = bodyDiv.querySelector('#navigation');
    contentDiv = bodyDiv.querySelector('#centerContent');
    listTitle = contentDiv.querySelector('#listTitle');
}

//Add an individual task to the task display
function addTaskDisplay(task) {
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
        addTaskDisplay(task);
    });
}

function initDisplay(){
   collectDivs(); 
   attachEvents();
}

initDisplay();

export {addTaskDisplay, updateTaskDisplay, updateTitle};