import Task from './modules/Task.js';
import Project from './modules/Project.js';
import { projectRender } from './modules/Render.js';
import './styles/main.css';

let project1 = new Project('Test 1');

project1.appendTask(new Task('Look at YouTube', 'Feb 17'));
project1.appendTask(new Task('Paused'));
project1.appendTask(new Task('Test test test test test test test test test', 'July 15'));
projectRender(project1);