function Skills({ skills, learning }) {
  return (
    <section>
      <div>
        <h3>Tech Stack</h3>
        <div className="skills-container">
          {skills.map((skill) => (
            <div key={skill} className="skills">
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3>Learning</h3>
        <div className="skills-container">
          {learning.map((learn) => (
            <div key={learn} className="skills">
              {learn}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
