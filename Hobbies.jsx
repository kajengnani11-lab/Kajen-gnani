import { useState } from 'react';

const hobbies = [
  {
    number: '01',
    title: 'Soccer',
    description: 'Playing soccer keeps me active and reminds me how much progress comes from teamwork, discipline, and persistence.',
    tags: ['Teamwork', 'Discipline', 'Energy'],
  },
  {
    number: '02',
    title: 'Gaming',
    description: 'I enjoy playing detailed story games and experimenting with different game mechanics to see how they affect the player experience.',
     tags: ['Experimenting', 'Adaptability', 'Learning'],
  },
  {
    number: '03',
    title: 'Solving problems',
    description: 'I like taking a challenge apart, finding a clear path through it, and improving the result one step at a time.',
    tags: ['Curiosity', 'Focus', 'Growth'],
  },
];

function Hobbies() {
  const [activeTag, setActiveTag] = useState('All');
  const [suggestion, setSuggestion] = useState(null);
  const tags = ['All', ...new Set(hobbies.flatMap((hobby) => hobby.tags))];
  const visibleHobbies = activeTag === 'All'
    ? hobbies
    : hobbies.filter((hobby) => hobby.tags.includes(activeTag));

  const showSuggestion = () => {
    const nextHobby = hobbies[Math.floor(Math.random() * hobbies.length)];
    setSuggestion(nextHobby);
  };

  return (
    <main className="hobbies-page">
      <section className="hobbies-hero">
        <div className="container">
          <p className="section-title">Beyond the screen</p>
          <h1>Things that keep<br /><em>me curious.</em></h1>
          <p className="hobbies-lede">
            My hobbies give me new ways to stay curious, work with people, and bring fresh energy to the things I build.
          </p>
        </div>
      </section>

      <section className="hobbies-list" aria-label="Kajen's hobbies">
        <div className="container">
          <div className="hobbies-controls" aria-label="Hobby options">
            <div className="hobby-filters" role="group" aria-label="Filter hobbies by skill">
              {tags.map((tag) => (
                <button
                  className={activeTag === tag ? 'is-selected' : ''}
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  type="button"
                >
                  {tag}
                </button>
              ))}
            </div>
            <button className="suggestion-button" onClick={showSuggestion} type="button">
              Pick for me <span aria-hidden="true">&#8594;</span>
            </button>
          </div>

          {suggestion && (
            <p className="hobby-suggestion" role="status">
              Try <strong>{suggestion.title}</strong> when you want to build {suggestion.tags[0].toLowerCase()}.
            </p>
          )}

          {visibleHobbies.map((hobby) => (
            <article className="hobby-card" key={hobby.number}>
              <span className="hobby-number">{hobby.number}</span>
              <div>
                <h2>{hobby.title}</h2>
                <p>{hobby.description}</p>
                <div className="hobby-tags">
                  {hobby.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Hobbies;
