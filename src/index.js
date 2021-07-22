import Task from './modules/Task.js';
import Project from './modules/Project.js';
import { projectRender, getFormInfo, loadSavedProjects } from './modules/Render.js';
import './styles/main.css';
import './modules/globalEvents.js'
import loadStorageProjects from './modules/storage';


if (window.localStorage.getItem('projectStorage')) {
    loadStorageProjects();
}

const clickMe = new Project("CLICK ME");
clickMe.appendTask(new Task('Add a task by clickling button on right', 'Now', clickMe));
projectRender(clickMe);