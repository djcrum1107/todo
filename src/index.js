import {addTask, readTasks} from './taskController';
import {updateTaskDisplay} from './displayController';
import './style.css';

function collectNavigation(){
    
}

function initWebsite(){
    const mainBody = document.body;
    addTask('Test');
    addTask('Test');
    addTask('Test');
    addTask('Test');
    updateTaskDisplay(readTasks());
}

initWebsite();
