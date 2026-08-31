const qualifications = [
  {
    number: '01',
    title: 'High school student',
    detail: 'Current education',
    description: 'Building a strong foundation through school while exploring the subjects and projects that connect to software development.',
  },
  {
    number: '02',
    title: 'Web development',
    detail: 'Growing experience',
    description: 'Practicing HTML, CSS, JavaScript, and React by creating responsive interfaces and learning from every project.',
  },
  {
    number: '03',
    title: 'Ready to contribute',
    detail: 'Personal strengths',
    description: 'A curious, dependable learner who enjoys solving problems, collaborating with others, and improving through feedback.',
  },
];

function Qualifications() {
  return (
    <main className="qualifications-page" id="qualifications-page">
      <section className="qualifications-hero">
        <div className="container">
          <p className="section-title">My foundation</p>
          <h1>Learning with<br /><em>purpose.</em></h1>
          <p className="qualifications-lede">
            A snapshot of the education, skills, and mindset I am bringing into my future in software development.
          </p>
        </div>
      </section>

      <section className="qualifications-list" aria-label="Kajen's qualifications">
        <div className="container">
          {qualifications.map((qualification) => (
            <article className="qualification-card" key={qualification.number}>
              <span className="qualification-number">{qualification.number}</span>
              <div>
                <p className="qualification-detail">{qualification.detail}</p>
                <h2>{qualification.title}</h2>
                <p className="qualification-description">{qualification.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Qualifications;
