import { projects } from "../data/resume";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1>Projects</h1>
        <p className={styles.subtitle}>
          A selection of what I'm building. Each card links to its GitHub repository.
        </p>
      </header>

      <div className={styles.grid}>
        {projects.map((p) => (
          <article key={p.title} className={styles.card}>
            <div className={styles.cardHead}>
              <h2>{p.title}</h2>
              <span className={styles.period}>{p.period}</span>
            </div>

            <div className={styles.chips}>
              {p.stack.map((tech) => (
                <span key={tech} className={styles.chip}>
                  {tech}
                </span>
              ))}
            </div>

            <ul className={styles.bullets}>
              {p.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <a
              className={styles.button}
              href={p.github}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub →
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Projects;
