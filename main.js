const projects = [
    {
        url: "#",
        title: "SU Fancomic",
        date: "2024-01-15",
        thumbnail: "images/Profile.png",
        category: "Comics",
        description: "A cutting-edge web application that revolutionizes user interaction.",
        status: "In Progress",
    }, 
    {
        url: "#",
        title: "Data Visualizer",
        date: "2024-01-15",
        thumbnail: "images/Profile.png",
        category: "Data Viz",
        description: "An innovative mobile app that enhances productivity on the go.",
        status: "In Progress",
    }, 
    {
        url: "#",
        title: "RSA Design",
        date: "2024-01-15",
        thumbnail: "images/Profile.png",
        category: "Data Science",
        description: "A data analysis tool that provides deep insights through machine learning.",
        status: "In Progress",
    },
    {
        url: "#",
        title: "Project Delta",
        date: "2024-01-15",
        thumbnail: "images/Profile.png",
        category: "3D Modeling",
        description: "An immersive gaming experience with stunning graphics and engaging gameplay.",
        status: "In Progress",
    },
    {
        url: "#",
        title: "Project Epsilon",
        date: "2024-01-15",
        thumbnail: "images/Profile.png",
        category: "3D Modeling",
        description: "An AI-powered solution that automates complex tasks with ease.",
        status: "In Progress",
    },
    {
        url: "#",
        title: "Project Zeta",
        date: "2024-01-15",
        thumbnail: "images/Profile.png",
        category: "3D Modeling",
        description: "A robust security platform that protects against modern cyber threats.",
        status: "Completed",
    },
    {
        url: "#",
        title: "2D-to-3D Creations",
        date: "2024-01-15",
        thumbnail: "images/Profile.png",
        category: "3D Modeling",
        description: "A scalable cloud service that optimizes resource management and deployment.",
        status: "Completed",
    }
];

const projectsContainer = document.querySelector(".projects-container");

const displayProjects = (urlValue, titleValue, dateValue, categoryValue, thumbnailValue, descriptionValue, statusValue) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const a = document.createElement("a");
    a.setAttribute("href", urlValue);

    const category = document.createElement("div");
    category.classList.add("category");
    category.innerHTML = categoryValue;

    const thumbnail = document.createElement("img");
    thumbnail.setAttribute("src", thumbnailValue);

    const title = document.createElement("h3");
    title.classList.add("title");
    title.innerHTML = titleValue;

    const date = document.createElement("div");
    date.classList.add("date");
    date.innerHTML = dateValue;

    const description = document.createElement("div");
    description.classList.add("description");
    description.innerHTML = descriptionValue;

    const status = document.createElement("div");
    status.classList.add("status");
    status.innerHTML = statusValue;



    projectsContainer.appendChild(card);
    card.appendChild(a);
    card.appendChild(category);
    card.appendChild(thumbnail);
    card.appendChild(date);
    card.appendChild(title);
    card.appendChild(description);

    card.appendChild(status);
}

const loadProjects = () => {
    projects.forEach(project => {
        displayProjects(project.url, project.title, project.date, project.category, project.thumbnail, project.description, project.status);
    });
}

loadProjects();