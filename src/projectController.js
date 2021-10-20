import {addTask} from './taskController'

let projectList = [];
let projectIDCount = 0;

const project = (id, projectName) => {
    let projectID = id;
    let tasks = [];

    const getProjectID = () => {
        return projectID;
    }

    const getProjectName = () => {
        return projectName;
    }

    const getTaskList = () => {
        return tasks;
    }

    const addTask = (task) => {
        tasks.push(task);
    }

    return {getProjectID, getProjectName, getTaskList, addTask};
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

function getProjectList(){
    return projectList;
}

export {initProjects, addProject, addTaskToProject, getProjectList};