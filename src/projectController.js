import {addTask} from './taskController'

let projectList = [];
let projectIDCount = 0;
let activeProject = null;

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
    projectList.push(project(projectIDCount++, projectName));
}

function initProjects() {
    addProject("Inbox");
    addTaskToProject(addTask("Sample Task"), 0);
}

function readProjects(){
    return projectList;
}

export {initProjects, addProject, addTaskToProject, readProjects};