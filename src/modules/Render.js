const projectRender = function(project) {
    const nav = document.querySelector('#projects');

    let projectDom = document.createElement('h3');
    projectDom.textContent = project.getName();

    projectDom.addEventListener('click', e => {
        project.getTaskArray().forEach(task => taskRender(task));
    })

    nav.appendChild(projectDom);
}

const taskRender = function(task) {
    const content = document.querySelector('#content');
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    taskDiv.innerHTML = `
        <p class="taskName">${task.getName()}</p>
        <p class="taskDate">${task.getDueDate()}</p>
    `

    content.appendChild(taskDiv);
}

export { projectRender };