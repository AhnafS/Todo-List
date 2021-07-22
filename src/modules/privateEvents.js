import { setCurrentProject, taskRender, getCurrentProject } from './Render';

const projectEventListiner = function(projectDom, project) {
    const content = document.querySelector('#content');
    projectDom.addEventListener('click', e => {
        content.innerHTML = '';
        setCurrentProject(project);
        project.getTaskArray().forEach(task => taskRender(task));
    });

    projectDom.addEventListener('click', e => {
        const addTask = document.querySelector('#addTask');
        addTask.classList.remove('toggleDisplay');
    }, { once: true })
}

export { projectEventListiner };