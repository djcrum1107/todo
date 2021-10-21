import {addTask} from './taskController'

let projectList = [];
let projectIDCount = 0;
let selectedProjectID = null;

const project = (id, projectName) => {
    let projectID = id;
    let tasks = [];
    let favoriteStatus = false;

    const getProjectID = () => {
        return projectID;
    }

    const getProjectName = () => {
        return projectName;
    }

    const setProjectName = (newProjectName) => {
        projectName = newProjectName;
    }

    const isFavorite = () => {
        return favoriteStatus;
    }

    const changeFavoriteStatus = () => {
        favoriteStatus = !favoriteStatus;
    }

    const getTaskList = () => {
        return tasks;
    }

    const addTask = (task) => {
        tasks.push(task);
    }

    return {getProjectID, getProjectName, setProjectName,
        getTaskList, addTask,
        isFavorite, changeFavoriteStatus};
}

function addTaskToProject(task, projectID) {
    projectList[projectID].addTask(task);
}

function addProject(projectName) {
    selectedProjectID = projectIDCount;
    const projectToAdd = project(projectIDCount++, projectName)
    projectList.push(projectToAdd);
}

function initProjects() {
    addProject("First Project");
    addProject("Second Project");
    addTaskToProject(addTask("Sample Task 1"), 0);
    addTaskToProject(addTask("Sample Task 2"), 0);
    addTaskToProject(addTask("Sample Task 3"), 1);
    addTaskToProject(addTask("Sample Task 4"), 1);
}

function readProjects(){
    return projectList;
}

function getSelectedProjectID() {
    return selectedProjectID;
}

function setSelectedProjectID(newSelectedProjectID){
    selectedProjectID = newSelectedProjectID;
}

function getSelectedProjectTasks() {
    return projectList[selectedProjectID].getTaskList();
}

export {initProjects, addProject, addTaskToProject, readProjects,
    getSelectedProjectTasks, getSelectedProjectID, setSelectedProjectID};