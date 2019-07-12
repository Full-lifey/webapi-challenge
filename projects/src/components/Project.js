import React from 'react';

const Project = props => {
  console.log(props);
  return (
    <div className='project-card'>
      <h4>{props.project.name}</h4>
      <p>{props.project.description}</p>
    </div>
  );
};

export default Project;
