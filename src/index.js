import _ from 'lodash';
import './styles.css';
import {addProject, displayProjects, Project} from './project';

console.log("test");

const myProjects = [];

class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    };

    markCompleted() {
    this.completed = true;
    };
};

const containerElement = document.querySelector(".container");
const projectElement = document.querySelector(".project")

addProject(myProjects, projectElement);
displayProjects(myProjects, projectElement);
