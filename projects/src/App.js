import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Project from './components/Project.js';

import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    console.log('useEffect triggered');
    axios
      .get('http://localhost:4000/api/projects')
      .then(projectList => {
        setProjects(projectList.data);
        console.log(projectList);
      })
      .catch(err => console.log(err));
    console.log(projects);
  }, []);

  if (!projects.length) {
    return <h1>Loading Projects</h1>;
  } else {
    return (
      <div className='App'>
        <h1>How about them Projects?</h1>
        {projects.map(project => {
          return <Project key={project.id} project={project} />;
        })}
      </div>
    );
  }
}

export default App;
