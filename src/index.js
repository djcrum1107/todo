import {addTask, readTasks} from './taskController';
import {initDisplay, updateTaskDisplay} from './displayController';
import {initProjects, getProjectList} from './projectController';
import './style.css';

function initWebsite(){
    initProjects();
    initDisplay();
};

initWebsite();