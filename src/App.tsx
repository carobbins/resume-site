import data from './data/resume.json';
import type { Resume } from './types/resume';

const resume: Resume = data;

function App() {
  return (
    <div>
      <h1>{resume.basics.name}</h1>
      <p>{resume.basics.title}</p>
    </div>
  );
}

export default App;