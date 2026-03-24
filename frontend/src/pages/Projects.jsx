import projects from "@data/projects.json";

function Projects() {
    return (
        <section>
            <ul>
                {projects.map((project) => (
                    <li key={project.name}>
                        <h3>{project.name}</h3>
                        <p>{project.tags}</p>
                        <p>{project.period}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Projects;