import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, withRouter } from 'react-router-dom';

import ProjectList from './components/ProjectList.js';
import Project from './components/Project.js';

import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/projects')
      .then(projectList => {
        setProjects(projectList.data);
      })
      .catch(err => console.log(err));
  }, []);

  if (!projects.length) {
    return <h1>Loading Projects</h1>;
  } else {
    return (
      <div className='App'>
        <h1>How about them Projects?</h1>
        {projects.map(project => {
          return <ProjectList key={project.id} project={project} />;
        })}
        <Route
          path='/projects/:id'
          render={props => <Project {...props} projects={projects} />}
        />
      </div>
    );
  }
}

export const AppWithRouter = withRouter(App);
