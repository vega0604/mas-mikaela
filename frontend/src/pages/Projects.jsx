import projects from "@data/projects.json";
import styles from "@styles/projects.module.css";

function Projects() {
    return (
        <section className="section">
            <ul id={styles.project_list} className="container"   aria-label="Projects List">
                {projects.map((project) => (
                    <li key={project.name} className={styles.project_item} aria-label={`Project: ${project.name}`}>
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