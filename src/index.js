import Task from './modules/Task.js';
import Project from './modules/Project.js';
import { projectRender, getFormInfo, loadSavedProjects } from './modules/Render.js';
import './styles/main.css';
import './modules/globalEvents.js'
import loadStorageProjects from './modules/storage';

let project1 = new Project('Project 1');

project1.appendTask(new Task('Do', "Feb 17", project1));
project1.appendTask(new Task('Do abdfks', "Feb 17", project1));
project1.appendTask(new Task('Do cool', "Feb 17", project1));
project1.appendTask(new Task('Do nice', "Feb 17", project1));
projectRender(project1);

let project2 = new Project('Project 2');

project2.appendTask(new Task('Do', "Feb 17", project2));
project2.appendTask(new Task('Do abdfks', "Feb 17", project2));
project2.appendTask(new Task('Do cool', "Feb 17", project2));
project2.appendTask(new Task('Do nice', "Feb 17", project2));
projectRender(project2);

// const bothProjects = [project1, project2];
// console.log(bothProjects);
// console.log(JSON.stringify(bothProjects));
// console.log(JSON.parse(JSON.stringify(bothProjects)));

if (window.localStorage.getItem('projectStorage')) {
    loadStorageProjects();
}