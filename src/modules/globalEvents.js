import { hideForm, getCurrentProject, getFormInfo, createNewTask, setCurrentProject, taskRender } from "./Render";

const submit = document.querySelector('#submitButton');
submit.addEventListener('click', e => {
    hideForm(document.querySelector('#taskForm'));

    const formInfo = getFormInfo();
    console.log(getCurrentProject());
    createNewTask(getCurrentProject(), formInfo.taskName, formInfo.taskDate);
    console.log(getCurrentProject());

})

const projectEventListiner = function(projectDom, project) {
    const content = document.querySelector('#content');
    projectDom.addEventListener('click', e => {
        content.innerHTML = '';
        setCurrentProject(project);
        project.getTaskArray().forEach(task => taskRender(task));
    });
}

export { projectEventListiner };