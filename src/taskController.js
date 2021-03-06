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

    const changeArchivedStatus = () =>{
        archived = !archived;
    }

    return {getTaskID, 
        getTitle, setTitle, 
        getDetails, setDetails, 
        getDueDate, setDueDate, 
        repeat, 
        isArchived, changeArchivedStatus};
};

function addTask(title){
    const newTask = task(taskIDCount++, title);
    taskList.push(newTask);
    return newTask;
}

function listTask(id){
    return taskList(id);
}

function readTasks(){
    return taskList;
}

export {addTask, readTasks};