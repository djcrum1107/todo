import {addTask, readTasks} from './taskController';
import {updateTaskDisplay} from './displayController';
import {initProjects, getProjectList} from './projectController';
import './style.css';

function initWebsite(){
    addTask('Test');
    addTask('Test');
    addTask('Test');
    addTask('Test');
    updateTaskDisplay(readTasks());
    initProjects();
    console.log(getProjectList());
};

initWebsite();