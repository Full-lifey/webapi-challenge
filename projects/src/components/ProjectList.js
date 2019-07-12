import React from 'react';
import { Link } from 'react-router-dom';

const ProjectList = props => {
  return (
    <Link className='project-card' to={`/projects/${props.project.id}`}>
      <h4>{props.project.name}</h4>
      <p>{props.project.description}</p>
    </Link>
  );
};

export default ProjectList;
