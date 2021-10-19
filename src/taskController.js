import {getDate} from 'date-fns';

let taskList = []
let taskIDCount = 0;

const task = (id, title, dueDate = new Date().toLocaleDateString(), repeat = "none") => {
    let taskID = id;
    let details = title;
    let archived = false;

    const getTaskID = () => {
        return taskID;
    }

    const getTitle = () => {
        return title;
    }

    const setTitle = (newTitle) => {
        title = newTitle;
    }

    const getDetails = () => {
        return details;
    }

    const setDetails = (newDetails) => {
        details = newDetails;
    }

    const getDueDate = () => {
        return dueDate;
    }

    const setDueDate = (newDueDate) => {
        dueDate = newDueDate;
    }

    const isArchived = () => {
        return archived; 
    }

    const setArchived = (archivedStatus) =>{
        archived = archivedStatus;
    }

    return {getTaskID, 
        getTitle, setTitle, 
        getDetails, setDetails, 
        getDueDate, setDueDate, 
        repeat, 
        isArchived, setArchived};
};

function addTask(title){
    taskList.push(task(taskIDCount++, title));
}

function listTask(id){
    return taskList(id);
}

function readTasks(){
    return taskList;
}

export {addTask, readTasks};