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

function displayProjects(myProjects, projectElement) {
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

        projectListItemElement.appendChild(projectListItemButtonElement);
        projectListElement.appendChild(projectListItemElement);
    };

    projectElement.appendChild(projectListElement);
};

function addProject(myProjects, projectElement) {
    const addProjectButton = document.querySelector('#addProjectButton');
    addProjectButton.addEventListener("click", function() {
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

            displayProjects(myProjects, projectElement);

            titleInput.value = "";
        })

        projectElement.appendChild(projectForm);
    });
};

export {
    addProject,
    displayProjects,
    Project
};