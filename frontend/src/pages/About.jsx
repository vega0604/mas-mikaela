import experience from "@data/experience.json";
import skills from "@data/skills.json";

function About() {
    return (
        <>
            <section>
                <div></div>
            </section>
            <section>
                <div>
                    <h2>My Skills</h2>
                    <ul>
                        {skills.map((skill) => (
                            <li key={skill.name}>
                                <img src={skill.img} alt={skill.name} />
                                <span>{skill.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section>
                <div>
                    <h2>My Experience</h2>
                    <ul>
                        {experience.map((exp) => (
                            <li key={exp.company}>
                                <h3>{exp.company}</h3>
                                <p>{exp.title}</p>
                                <p>{exp.period}</p>
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