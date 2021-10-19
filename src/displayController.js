import {task} from './taskController';

let navDiv = "";
let contentDiv = "";

function collectDivs() {
    navDiv = document.getElementById('navigation');
    contentDiv = document.getElementById('centerContent');
}

function updateTaskDisplay(taskList){
    taskList.forEach(task => {
        const addedTask = document.createElement('div');
        addedTask.classList.add('taskSimple');
        const titleText = document.createElement('p');
        titleText.textContent = task.getTitle();
        addedTask.appendChild(titleText);
        contentDiv.appendChild(addedTask);
    });
}

collectDivs();

export {updateTaskDisplay};