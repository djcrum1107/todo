import {addTask, readTasks} from './taskController';
import {addProject, readProjects, getSelectedProjectTasks, getSelectedProjectID, setSelectedProjectID} from './projectController';
import { forEach } from 'lodash';

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
    inputForm.style.display = "grid";
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
    taskToArchiveDiv.style.display = 'none';
    updateTaskDisplay(getSelectedProjectTasks());
}

function navigateWithButton(e) {
    const currentProjectDiv = navDiv.querySelector('.selectedProject');
    const targetProjectDiv = e.target;
    //Only change the selected project if different than current as measured by currentProject class
    if(currentProjectDiv != targetProjectDiv) {
        //Check if there isn't a current projectDiv before trying to remove the class
        if(currentProjectDiv != null){
            currentProjectDiv.classList.remove('selectedProject');
        }
        targetProjectDiv.classList.add('selectedProject');
        const targetProjectID = targetProjectDiv.classList[0].split('_')[1];
        setSelectedProjectID(targetProjectID);
        updateTaskDisplay();
    }    
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

function clearTaskList() {
    contentDiv.querySelectorAll('.taskSimple').forEach(taskDiv => {
        taskDiv.style.display = 'none';
    });
}

//Add an individual task to the task display
function addTaskToDisplay(task) {
    const addedTaskElement = document.createElement('div');
        addedTaskElement.classList.add('taskID_' + task.getTaskID());
        addedTaskElement.classList.add('taskSimple');
        const titleText = document.createElement('p');
        titleText.textContent = task.getTitle();
        const archiveButton = document.createElement('button');
        archiveButton.addEventListener('click', archiveTask);
        addedTaskElement.appendChild(archiveButton);
        addedTaskElement.appendChild(titleText);
        addedTaskElement.style.display = 'grid';
        contentDiv.appendChild(addedTaskElement);    
}

//Update the full task list excluding those that are archived
function updateTaskDisplay(taskList) {
    clearTaskList();
    if(taskList == null){
        taskList = getSelectedProjectTasks();
    }
    taskList.forEach(task => {
        //If the task isn't there based on taskID class add it, otherwise show if it's hidden
        const taskDiv = contentDiv.querySelector('.taskID_' + task.getTaskID());
        //Don't show if archived
        if(task.isArchived()){
            taskDiv.style.display = 'none';
        }
        //If the taskDiv wasn't already created, create it
        else if(taskDiv == null) {
            addTaskToDisplay(task);
            return;
        //If the taskDiv was already created, show it instead of creating it again
        }else {
            taskDiv.style.display = 'grid';
        }
        
    });
}

function addProjectToDisplay(project, projectsDiv) {
    const addedProjectElement = document.createElement('button');
    addedProjectElement.innerText = project.getProjectName();
    addedProjectElement.classList.add('projectID_' + project.getProjectID());
    addedProjectElement.addEventListener('click', navigateWithButton);
    addedProjectElement.classList.add('navButton');
    
    //This long function is used to append to the second to last child since trying to use insertBefore() didn't want to work at all. My guess due to hidden whitespace in the HTML I couldn't get rid of.
    projectsDiv.insertBefore(addedProjectElement, projectsDiv.children[projectsDiv.childElementCount -1]);

}

function updateProjectsDisplay(projectList){
    const currentProjectName = projectList[getSelectedProjectID()].getProjectName();
    updateTitle(currentProjectName);
    projectList.forEach(project => {
        const projectsDiv = navDiv.querySelector('#projects');
        addProjectToDisplay(project, projectsDiv);
    });
}

function initDisplay(){
   collectDivs(); 
   attachEvents();
   updateTaskDisplay(getSelectedProjectTasks());
   updateProjectsDisplay(readProjects());
}

export {initDisplay, addTaskToDisplay, updateTaskDisplay, updateTitle};