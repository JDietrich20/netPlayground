const projects = [
  {
    url: "#",
    title: "Responsible AI Hub Product Design",
    date: "September 2025 — Present",
    thumbnail: "images/RAI.png",
    category: "Art/Tech",
    description:
      "Leading the <strong>design</strong>, <strong>development</strong>, and <strong>implementation</strong> of interactive visualizations to communicate AI research findings effectively to visitors at Santa Clara University.",
    status: "In Progress",
  },
  {
    url: "#",
    title: "Robotic Service Animal Design",
    date: "September 2025 — Present",
    thumbnail: "images/RSA.png",
    category: "Robotics/Design",
    description:
      "Designing assistive robotic service animals with a focus on <strong>functionality</strong>, <strong>user experience</strong>, and <strong> user interaction</strong>, enhancing accessibility and usability for end-users.",
    status: "In Progress",
  },
  {
    url: "https://fractureau.carrd.co/#contact",
    title: "SU Fancomic",
    date: "April 2020 — Present",
    thumbnail: "images/FAU.PNG",
    category: "Art",
    description:
      "Creating an ongoing fancomic series featuring original artwork and <strong>storytelling</strong>, shared with an online community to engage and inspire readers.",
    status: "Ongoing",
  },
  {
    url: "#",
    title: "2D-to-3D Character Modeling",
    date: "September 2025 — Present",
    thumbnail: "images/TwoDee.png",
    category: "3D Modeling",
    description:
      "Transforming 2D character concepts into fully textured 3D models with <strong>Nomad Sculpt</strong> and <strong>Procreate</strong> while maintaining artistic integrity and production-ready quality.",
    status: "Ongoing",
  },
  {
    url: "https://github.com/JDietrich20/GenAiBias_Viz",
    title: "GenAI Bias Visualization Dashboard",
    date: "September 2025 — October 2025",
    thumbnail: "images/GenAiBias.png",
    category: "Web Development",
    description:
      "Developed an interactive dashboard to visualize bias in AI models with <strong>React + Vite</strong>, <strong>HTML</strong>, <strong>JavaScript</strong>, and <strong>Plotly.js</strong>. <strong>Showcased at BayLearn 2025</strong>. Provided researchers with clear metrics for fairness and equity assessment.",
    status: "Completed",
  },
  {
    url: "https://kaoki.com/project/koons-ruins/",
    title: "3D Reconstruction of Koons Ruins",
    date: "May 2025 — July 2025",
    thumbnail: "images/KoonsRuins.png",
    category: "3D Modeling",
    description:
      "Designed and rendered a photorealistic 3D environment using <strong>Cinema 4D</strong> and <strong>Octane</strong>, translating artistic concepts into immersive visual experiences.",
    status: "Completed",
  },
  {
    url: "https://github.com/ShahManali99/OOAD_Project/tree/main",
    title: "Online Bookstore Management System",
    date: "March 2025 — June 2025",
    thumbnail: "images/OnlineBook.png",
    category: "Software Development",
    description:
      "Developed a <strong>full-stack</strong> bookstore management system in <strong>C++</strong> and <strong>Qt</strong> using MVC architecture, enabling users to browse, purchase, and manage books efficiently.",
    status: "Completed",
  },
  {
    url: "https://medium.com/human-computer-interaction-at-santa-clara/balance-bringing-balance-to-your-day-2b37bb1842a4",
    title: "Balance: Helping Users Navigate Burnout",
    date: "March 2025 — June 2025",
    thumbnail: "images/Balance.webp",
    category: "UX/UI Design",
    description:
      "Designed a mobile application to support healthy habits and burnout management through <strong>UX research</strong>, prototyping in <strong>Figma</strong>, and usability testing.",
    status: "Completed",
  },
  {
    url: "https://magazine.scu.edu/magazines/spring-2025/art-at-new-heights/",
    title: "Salesforce Tower Project",
    date: "January 2025 — May 2025",
    thumbnail: "images/Salesforce.png",
    category: "3D Animation",
    description:
      "Produced a 3D animated scene displayed on Salesforce Tower, collaborating with an artist to accurately translate her vision using <strong>Cinema 4D</strong> and <strong>After Effects</strong>.",
    status: "Completed",
  },
  {
    url: "https://github.com/bmaruy/PeerTap",
    title: "PeerTap: Business Cards Gone Digital",
    date: "September 2024 — December 2024",
    thumbnail: "images/PeerTap.png",
    category: "Mobile App Development",
    description:
      "Developed a <strong>Flutter-based</strong> mobile application for digital business card exchange, integrating interactive UI/UX and animated branding elements created with <strong>After Effects</strong>, <strong>Adobe Illustrator</strong> and <strong>Lottie</strong>.",
    status: "Completed",
  },
  {
    url: "#",
    title: "Robot Design Project",
    date: "March 2024 — June 2024",
    thumbnail: "images/Robot.png",
    category: "3D Modeling",
    description:
      "Designed and prototyped robot models with <strong>Cinema 4D</strong> as part of a 3D Modeling and Animation course, emphasizing functional and aesthetic design.",
    status: "Completed",
  },
  {
    url: "https://github.com/vrushabhh97/tiktok_clone",
    title: "Multi-modal Research App",
    date: "March 2024 — May 2024",
    thumbnail: "images/MultiModalApp.png",
    category: "Mobile App Development",
    description:
      "Built a <strong>Flutter-based</strong> mobile application to analyze multi-modal social media interactions, enabling controlled experiments and behavioral data collection.",
    status: "Completed",
  },
];

const container = document.querySelector(".projects-container");

projects.forEach(
  ({ url, title, date, category, thumbnail, description, status }) => {
    const card = document.createElement("div");
    card.classList.add("card", "clickable-card");

    // Determine status class
    const statusClass = status.toLowerCase().replace(/\s+/g, "-"); // "Completed" -> "completed"

    card.innerHTML = `
      <div class="category">${category}</div>
      <img src="${thumbnail}" alt="${title}" />
      <h3 class="title">${title}</h3>
      <div class="date">${date}</div>
      <div class="description">${description}</div>
      <div class="status ${statusClass}">${status}</div>
      <a href="${url}" target="_blank" class="clickable-link"></a> 
    `;

    container.appendChild(card);
  }
);
