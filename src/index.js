import {addTask, readTasks} from './taskController'
import './style.css';

function collectNavigation(){
    
}

function initWebsite(){
    const mainBody = document.body;
    addTask('Test');
    addTask('Test');
    addTask('Test');
    addTask('Test');
    console.log(readTasks());
}

initWebsite();