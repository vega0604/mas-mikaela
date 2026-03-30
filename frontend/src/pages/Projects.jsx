import projects from "@data/projects.json";
import styles from "@styles/projects.module.css";

function Projects() {
    return (
        <section className="section root_container">
            <ul id={styles.project_list} aria-label="Projects List">
                {projects.map((project) => (
                    <li key={project.name} className={styles.project_item} aria-label={`Project: ${project.name}`}>
                        <h3>{project.name}</h3>
                        <p>{project.tags}</p>
                        <p>{project.period}</p>
                        <img src={project.img} alt={project.name} />
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Projects;