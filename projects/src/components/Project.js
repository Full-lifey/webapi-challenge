import React from 'react';

const Project = props => {
  const { id } = props.match.params;
  const project = props.projects.find(project => `${project.id}` === id);
  if (!props.projects) {
    return <h2>Loading Project</h2>;
  } else {
    return (
      <div className='project-card' key={project.id}>
        <h2>Testing</h2>
      </div>
    );
  }
};

export default Project;
