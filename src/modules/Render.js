import Task from './Task';
import Project from './Project';
import { projectEventListiner } from './privateEvents.js'
import { removeTaskAdder } from './globalEvents.js';

let currentProject;
let allProjects = [];
if (window.localStorage.getItem('projectStorage')) {
    allProjects = JSON.parse(window.localStorage.getItem('projectStorage'));
}

const projectRender = function(project) {
    const nav = document.querySelector('#projects');
    let projectDom = document.createElement('h3');
    projectDom.textContent = project.getName();
    projectEventListiner(projectDom, project);
    nav.appendChild(projectDom);
}

const taskRender = function(task) {
    const content = document.querySelector('#content');
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    taskDiv.setAttribute('data-index', task.getIndex());
    taskDiv.innerHTML = `
        <p class="taskName">${task.getName()}</p>
        <p class="taskDate">${task.getDueDate()}</p>
    `;
    const closeImg = new Image();
    closeImg.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa9%2FBlack_x.svg%2F896px-Black_x.svg.png&f=1&nofb=1";
    closeImg.classList.add('closeImg');
    removeTaskAdder(closeImg);
    taskDiv.prepend(closeImg);

    content.appendChild(taskDiv);
}

const getProjectFormInfo = function() {
    const projectName = document.querySelector('#projectName');
    return projectName.value;
}


const getTaskFormInfo = function() {
    const form = document.querySelector('#taskForm');
    const taskName = document.querySelector('#taskName').value;
    document.querySelector('#taskName').value = "";
    const taskDate = document.querySelector('#taskDate').value;
    document.querySelector('#taskDate').value = "";
    const submit = document.querySelector('#submitButton');

    return { taskName, taskDate };
}

const hideForm = function(form) {
    form.classList.toggle('toggleDisplay');
}

const getCurrentProject = function() {
    return currentProject;
}

const setCurrentProject = function(project) {
    currentProject = project;
}

const createNewTask = function(project, taskName, taskDate) {
    const newTask = new Task(taskName, taskDate, project);
    window.localStorage.setItem('projectStorage', JSON.stringify(allProjects));
    project.appendTask(newTask);
    taskRender(newTask);
    console.log(window.localStorage.getItem('projectStorage'));
}

const createNewProject = function(name) {
    const newProject = new Project(name);
    allProjects.push(newProject);
    window.localStorage.setItem('projectStorage', JSON.stringify(allProjects));
    projectRender(newProject);
    console.log(window.localStorage.getItem('projectStorage'));
}

const clearTask = function() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
}

const loadAllTask = function() {
    const content = document.querySelector('#content');
    getCurrentProject().getTaskArray().forEach(task => taskRender(task));
}

const clearTaskInfoValue = function() {
    const taskName = document.querySelector('#taskName');
    const taskDate = document.querySelector('#taskDate');
    taskName.value = "";
    taskDate.value = "";
}

const loadSavedProjects = function() {
    const savedProjects = JSON.parse(window.localStorage.getItem('projectStorage'));
    console.log(savedProjects)
    savedProjects.forEach(project => {
        projectRender(project);
    })
}

export {
    projectRender,
    getTaskFormInfo,
    hideForm,
    getCurrentProject,
    createNewTask,
    setCurrentProject,
    taskRender,
    createNewProject,
    getProjectFormInfo,
    clearTask,
    loadAllTask,
    clearTaskInfoValue,
    allProjects,
    loadSavedProjects
};