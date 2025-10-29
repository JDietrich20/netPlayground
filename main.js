const projects = [
    {
        url: "#",
        title: "Project Alpha",
        thumbnail: "images/Profile.png",
        category: "Web Development",
        description: "A cutting-edge web application that revolutionizes user interaction.",
    }, 
    {
        url: "#",
        title: "Project Beta",
        thumbnail: "images/Profile.png",
        category: "Mobile Development",
        description: "An innovative mobile app that enhances productivity on the go.",
    }, 
    {
        url: "#",
        title: "Project Gamma",
        thumbnail: "images/Profile.png",
        category: "Data Science",
        description: "A data analysis tool that provides deep insights through machine learning.",
    },
    {
        url: "#",
        title: "Project Delta",
        thumbnail: "images/Profile.png",
        category: "Game Development",
        description: "An immersive gaming experience with stunning graphics and engaging gameplay.",
    },
    {
        url: "#",
        title: "Project Epsilon",
        thumbnail: "images/Profile.png",
        category: "Artificial Intelligence",
        description: "An AI-powered solution that automates complex tasks with ease.",
    },
    {
        url: "#",
        title: "Project Zeta",
        thumbnail: "images/Profile.png",
        category: "Cybersecurity",
        description: "A robust security platform that protects against modern cyber threats.",
    }
];

const projectsContainer = document.querySelector(".projects-container");

const displayProjects = (urlValue, titleValue, categoryValue, thumbnailValue, descriptionValue) => {
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

    const description = document.createElement("div");
    description.classList.add("description");
    description.innerHTML = descriptionValue;


    projectsContainer.appendChild(card);
    card.appendChild(a);
    card.appendChild(category);
    card.appendChild(thumbnail);
    card.appendChild(title);
    card.appendChild(description);
}

const loadProjects = () => {
    projects.forEach(project => {
        displayProjects(project.url, project.title, project.category, project.thumbnail, project.description);
    });
}

loadProjects();