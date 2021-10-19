import {addTask, readTasks} from './taskController';
import {updateTaskDisplay} from './displayController';
import './style.css';

function initWebsite(){
    addTask('Test');
    addTask('Test');
    addTask('Test');
    addTask('Test');
    updateTaskDisplay(readTasks());
};

initWebsite();