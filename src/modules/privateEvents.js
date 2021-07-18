import { setCurrentProject, taskRender } from './Render';

const projectEventListiner = function(projectDom, project) {
    const content = document.querySelector('#content');
    projectDom.addEventListener('click', e => {
        content.innerHTML = '';
        setCurrentProject(project);
        project.getTaskArray().forEach(task => taskRender(task));
    });
}

export default projectEventListiner;