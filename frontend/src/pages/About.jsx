import styles from "@styles/about.module.css";
import experience from "@data/experience.json";
import skills from "@data/skills.json";

function About() {
    return (
        <>
            <section>
                <div></div>
            </section>
            <section id={styles.skills_section}>
                <div id={styles.skills_container}>
                    <h2>My Skills</h2>
                    <ul id={styles.skills_list}>
                        {skills.map((skill) => (
                            <li key={skill.name} className={styles.skill_item}>
                                <img src={skill.img} alt={skill.name} />
                                <p>{skill.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section id={styles.experience_section}>
                <div id={styles.experience_container}>
                    <h2>My Experience</h2>
                    <ul id={styles.experience_list}>
                        {experience.map((exp) => (
                            <li key={exp.company} className={styles.experience_item}>
                                <h3 className={styles.experience_company}>{exp.company}</h3>
                                <p className={styles.experience_title}>{exp.title}</p>
                                <p className={styles.experience_period}>{exp.period}</p>
                                <img src={exp.img} alt={exp.company} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}

export default About;