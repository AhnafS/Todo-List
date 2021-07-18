import { hideForm, getCurrentProject, getTaskFormInfo, createNewTask, createNewProject, getProjectFormInfo } from "./Render";

const submit = document.querySelector('#submitButton');
submit.addEventListener('click', e => {
    hideForm(document.querySelector('#taskForm'));

    const formInfo = getTaskFormInfo();
    console.log(getCurrentProject());
    createNewTask(getCurrentProject(), formInfo.taskName, formInfo.taskDate);
    console.log(getCurrentProject());

})

const addProject = document.querySelector('#addProject');
addProject.addEventListener('click', e => {
    createNewProject(getProjectFormInfo());
    document.querySelector('#projectName').value = "";

})