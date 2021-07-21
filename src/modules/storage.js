import Project from './Project';
import { projectRender } from './Render';

const projectArray = JSON.parse(window.localStorage.getItem('projectStorage'))


const loadStorageProjects = function() {
    console.log(projectArray);
    projectArray.forEach(storageProject => {
        const newProject = new Project(storageProject.name);

        storageProject.taskArray.forEach(task => {
            newProject.appendTask(task);
        })

        projectRender(newProject);
    })
}


export default loadStorageProjects;