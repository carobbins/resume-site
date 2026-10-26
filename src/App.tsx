import data from './data/resume.json';
import type { Resume } from './types/resume';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';

const resume: Resume = data;

function App() {
  return (
    <div>
      <h1>{resume.basics.name}</h1>
      <p>{resume.basics.title}</p>
      <Hero basics={resume.basics} summary={resume.summary} />
      <Experience jobs={resume.experience} />
    </div>
  );
}

export default App;