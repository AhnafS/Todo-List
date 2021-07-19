import { hideForm, getCurrentProject, getTaskFormInfo, createNewTask, createNewProject, getProjectFormInfo, projectRender, taskRender, clearTask, loadAllTask, clearTaskInfoValue, allProjects } from "./Render";

const addTask = document.querySelector('#addTask');
addTask.addEventListener('click', e => {
    const taskForm = document.querySelector('#taskForm');
    taskForm.classList.toggle('toggleDisplay');
})

const submit = document.querySelector('#submitButton');
submit.addEventListener('click', e => {
    hideForm(document.querySelector('#taskForm'));

    const formInfo = getTaskFormInfo();
    createNewTask(getCurrentProject(), formInfo.taskName, formInfo.taskDate);
    clearTaskInfoValue();
    console.log(getCurrentProject());

})

const addProject = document.querySelector('#addProject');
addProject.addEventListener('click', e => {
    createNewProject(getProjectFormInfo());
    document.querySelector('#projectName').value = "";

})

const removeTaskAdder = function(img) {
    img.addEventListener('click', e => {
        const index = e.target.parentNode.getAttribute('data-index');
        console.log(getCurrentProject().removeTask(index));
        clearTask();
        loadAllTask();
    });
}

export { removeTaskAdder };