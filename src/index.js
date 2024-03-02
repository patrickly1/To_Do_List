import _ from 'lodash';
import './styles.css';
import {addProject, displayProjects, Project, Task, addTasktoProject, displayTasks} from './project';

console.log("test");

const myProjects = [];
const tasks = [];

const projectElement = document.querySelector(".project");
const taskElement = document.querySelector(".task");
const addTaskButtonElement = document.querySelector("#addTaskButton");

addProject(myProjects, projectElement, taskElement);

let lastClickedProjectIndex = 0;

addTaskButtonElement.addEventListener("click", function() {
    const taskForm = document.getElementById("taskForm");
    if (taskForm) {
        taskForm.remove(); // Remove existing task form if it exists
    }
    console.log("task event listener");
    if (myProjects[lastClickedProjectIndex] !== undefined) {
        addTasktoProject(myProjects[lastClickedProjectIndex], taskElement); // Call addTasktoProject again to add a new task form
    } else{
        console.log("not working");
    }

});

projectElement.addEventListener("click", function(event) {
    const taskForm = document.getElementById("taskForm");
    if (taskForm) {
        taskForm.remove(); // Remove existing task form if it exists
    }

    const clickedButton = event.target.nodeName === "BUTTON" ? event.target : event.target.closest("button");
    if (clickedButton) {
        const projectName = clickedButton.textContent;
        const clickedProjectIndex = myProjects.findIndex(project => project.title === projectName);
        lastClickedProjectIndex = clickedProjectIndex;
        
        console.log(clickedProjectIndex, projectName);
        if (clickedProjectIndex !== -1) {
            addTasktoProject(myProjects[clickedProjectIndex], taskElement);
            console.log("myProjects:", myProjects);
        };
    };
});