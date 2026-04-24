import { personal, about, researchInterests, skills } from "../data/resume";
import profile from "../assets/profile.jpeg";
import styles from "./Home.module.css";

function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.avatar}>
          <img src={profile} alt={personal.name} />
        </div>
        <div>
          <h1 className={styles.name}>{personal.name}</h1>
          <p className={styles.tagline}>{personal.tagline}</p>
        </div>
      </section>

      <section className={styles.card}>
        <h2>About Me</h2>
        <p className={styles.paragraph}>{about}</p>
      </section>

      <section className={styles.card}>
        <h2>Research Interests</h2>
        <ul className={styles.list}>
          {researchInterests.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.card}>
        <h2>Personal Details</h2>
        <dl className={styles.details}>
          <dt>Name</dt>
          <dd>{personal.name}</dd>

          <dt>Phone</dt>
          <dd>
            <a href={`tel:${personal.phone.replace(/\s|-/g, "")}`}>
              {personal.phone}
            </a>
          </dd>

          <dt>Personal Email</dt>
          <dd>
            <a href={`mailto:${personal.emailPersonal}`}>
              {personal.emailPersonal}
            </a>
          </dd>

          <dt>College Email</dt>
          <dd>
            <a href={`mailto:${personal.emailCollege}`}>
              {personal.emailCollege}
            </a>
          </dd>

          <dt>GitHub</dt>
          <dd>
            <a href={personal.github} target="_blank" rel="noreferrer">
              {personal.github.replace("https://", "")}
            </a>
          </dd>

          <dt>LinkedIn</dt>
          <dd>
            <a href={personal.linkedin} target="_blank" rel="noreferrer">
              {personal.linkedin.replace("https://", "")}
            </a>
          </dd>
        </dl>
      </section>

      <section className={styles.card}>
        <h2>Skills</h2>
        <div className={styles.skillGroups}>
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className={styles.skillGroup}>
              <h3>{group}</h3>
              <div className={styles.chips}>
                {items.map((s) => (
                  <span key={s} className={styles.chip}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
