class Project {
    constructor(title) {
        this.title = title;
        this.tasks = [];
    };

    addTask(task) {
        this.tasks.push(task);
    };

    removeTask(task) {
        this.tasks = this.tasks.filter(t => t !== task);
    };
};

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

function displayProjects(myProjects, projectElement, taskElement) {
    // Clear the list of projects
    const existingProjectList = document.getElementById("projectList");
    if (existingProjectList) {
        existingProjectList.remove();
    }

    // Create a new list of projects
    const projectListElement = document.createElement("ul");
    projectListElement.id = "projectList"; 
    projectListElement.classList.add("projectList");

    //Populate the list of projects
    for (let i = 0; i < myProjects.length; i++) {
        const project = myProjects[i];
        const projectListItemElement = document.createElement("li");
        const projectListItemButtonElement = document.createElement("button");

        projectListItemButtonElement.type = "button";
        projectListItemButtonElement.textContent = project.title;

        //Add click event listener to each project button
        projectListItemButtonElement.addEventListener("click", (event) => {
            const projectName = event.target.textContent;
            const clickedproject = myProjects.find(p => p.title === projectName);
            displayTasks(clickedproject.tasks, taskElement);
            //addTasktoProject(clickedproject, taskElement);
        });

        projectListItemElement.appendChild(projectListItemButtonElement);
        projectListElement.appendChild(projectListItemElement);
    };

    projectElement.appendChild(projectListElement);
};

function displayTasks(tasks, taskElement) {
    // Clear the list of tasks
    const existingTaskList = document.getElementById("taskList");
    if (existingTaskList) {
        existingTaskList.remove();
    }

    // Create a new list of tasks
    const taskListElement = document.createElement("ul");
    taskListElement.id = "taskList"; 
    taskListElement.classList.add("taskList");

    tasks.forEach(task => {
        const taskListItemElement = document.createElement("li");
        taskListItemElement.textContent = task.title;
        taskListElement.appendChild(taskListItemElement);
    });

    taskElement.appendChild(taskListElement);
};

function addTasktoProject(project, taskElement) {
    console.log("project:", project);
    //const addTaskButtonElement = document.querySelector('#addTaskButton');
    //addTaskButtonElement.addEventListener("click", function() {
    const taskForm = document.createElement("form");
    taskForm.id = "taskForm";
    
    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Task:";
    titleLabel.setAttribute("for", "taskTitle");

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "taskTitle";
    titleInput.name = "tasktitle";
    titleInput.required = true;

    const addButton = document.createElement("button");
    addButton.type = "submit";
    addButton.textContent = "Add Task";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete Form";
    deleteButton.addEventListener("click", function() {
        taskForm.remove();
    });

    taskForm.appendChild(titleLabel);
    taskForm.appendChild(titleInput);
    taskForm.appendChild(addButton);
    taskForm.appendChild(deleteButton);

    //Save task title input to store as object
    taskForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const title = titleInput.value;

        const newTask = new Task(title);

        project.addTask(newTask);
        console.log("submit", project);

        displayTasks(project.tasks, taskElement);

        titleInput.value = "";
    });

    taskElement.appendChild(taskForm);
    //});
};

function addProject(myProjects, projectElement, taskElement) {
    const addProjectButton = document.querySelector('#addProjectButton');
    addProjectButton.addEventListener("click", function() {
        const oldProjectForm = document.getElementById("projectForm");
        if (oldProjectForm) {
            oldProjectForm.remove();
        }
        const projectForm = document.createElement("form");
        projectForm.id = "projectForm";
        
        const titleLabel = document.createElement("label");
        titleLabel.textContent = "Project Title:";
        titleLabel.setAttribute("for", "projectTitle");

        const titleInput = document.createElement("input");
        titleInput.type = "text";
        titleInput.id = "projectTitle";
        titleInput.name = "projectTitle";
        titleInput.required = true;

        const addButton = document.createElement("button");
        addButton.type = "submit";
        addButton.textContent = "Add Project";

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete Form";
        deleteButton.addEventListener("click", function() {
            projectForm.remove();
        });

        projectForm.appendChild(titleLabel);
        projectForm.appendChild(titleInput);
        projectForm.appendChild(addButton);
        projectForm.appendChild(deleteButton);

        //Save project title input to store as object
        projectForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const title = titleInput.value;

            const newProject = new Project(title);

            myProjects.push(newProject);

            displayProjects(myProjects, projectElement, taskElement);

            titleInput.value = "";

            console.log(newProject.title);
        })

        projectElement.appendChild(projectForm);
    });
};

export {
    addProject,
    displayProjects,
    Project, 
    Task,
    displayTasks,
    addTasktoProject
};