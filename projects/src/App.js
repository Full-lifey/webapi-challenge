import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    console.log('useEffect triggered');
    axios
      .get('http://localhost:4000/api/projects')
      .then(projects => setProjects(projects))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='App'>
      <h1>How about them Projects?</h1>
    </div>
  );
}

export default App;
