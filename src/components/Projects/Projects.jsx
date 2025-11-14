import Card from "../ui/Card/Card.jsx";
import "./Projects.css";
import ganImg from "../../assets/images/gan.png";
import weatherApp from "../../assets/images/weather-app.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "The Great Achievers Network",
      description:
        "A website built for an NGO in Zambia. It showcases their vision, mission programs and the impact the organisation has had on the lives of young girls. Features modern and clean UI.",
      technologies: [
        "Wordpress",
        "CSS3/HTML5",
        "JavaScript",
        "PHP",
        "MySQL",
        "Elementor/Divi",
      ],
      liveLink: "https://greatachieversnetwork.org",
      githubLink: "https://github.com/kondwanimuwowo/",
      image: ganImg,
      featured: true,
    },

    {
      id: 2,
      title: "Weather App",
      description:
        "A responsive portfolio website built with React, showcasing my projects and skills. Features modern UI design with smooth animations and dark mode support.",
      technologies: ["React", "CSS3", "JavaScript", "Vite"],
      liveLink: "https://your-portfolio-link.com",
      githubLink: "https://github.com/kondwanimuwowo/portfolio",
      image: weatherApp,
      featured: false,
    },

    // Empty project for coming soon
    {
      id: 3,
      comingSoon: true,
    },
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  if (project.comingSoon) {
    return (
      <Card className="project-card coming-soon-card" hoverable>
        <div className="coming-soon-content">
          <div className="coming-soon-icon">🚧</div>
          <h3>New Project Coming Soon</h3>
          <p>I'm working on something amazing! Stay tuned for more projects.</p>
          <div className="construction-text">Under Construction</div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="project-card" hoverable>
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link live-demo"
          >
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link github"
          >
            GitHub
          </a>
        </div>
      </div>
    </Card>
  );
};

export default Projects;
