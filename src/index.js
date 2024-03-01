import _ from 'lodash';
import './styles.css';
import {addProject, displayProjects, Project, Task, addTasktoProject, displayTasks} from './project';

console.log("test");

const myProjects = [];
const tasks = [];

const containerElement = document.querySelector(".container");
const projectElement = document.querySelector(".project")
const taskElement = document.querySelector(".task");

addProject(myProjects, projectElement);
displayProjects(myProjects, projectElement, taskElement);
addTasktoProject(myProjects[0], taskElement);
displayTasks(tasks, taskElement);

