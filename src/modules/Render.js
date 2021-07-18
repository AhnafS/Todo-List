import Task from './Task';
import Project from './Project';
import projectEventListiner from './privateEvents.js'

let currentProject;

const projectRender = function(project) {
    const addProjectButton = document.querySelector('#addProject');
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
    `

    content.appendChild(taskDiv);
}

const getProjectFormInfo = function() {
    const projectName = document.querySelector('#projectName');
    return projectName.value;
}


const getTaskFormInfo = function() {
    const form = document.querySelector('#taskForm');
    const taskName = document.querySelector('#taskName').value;
    const taskDate = document.querySelector('#taskDate').value;
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
    project.appendTask(newTask);
    taskRender(newTask);
}

const createNewProject = function(name) {
    const newProject = new Project(name);
    projectRender(newProject);
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
    getProjectFormInfo
};