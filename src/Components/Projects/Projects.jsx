import React from 'react';
import './Projects.css';
import project1 from '../../Assets/naruto-intro.png';
import project2 from '../../Assets/ex3.png'

const Projects = () => {
  // Sample data for projects
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ipsum at velit efficitur, nec consectetur lacus hendrerit.',
      languages: ['HTML', 'CSS', 'JavaScript'],
      image: project1,
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Praesent vitae neque vel odio rhoncus vehicula. Donec id commodo sapien. Vivamus posuere orci sed nibh venenatis, non faucibus nisl vehicula.',
      languages: ['React', 'Node.js', 'MongoDB'],
      image: project2,
    },
    // Add more projects as needed
  ];

  return (
    <div className="p-com" id='Projects'>
      {projects.map(project => (
        <div key={project.id} className="p-card">
          <img src={project.image} alt={project.title} className="p-image" />
          <div className="p-details">
            <h2 className="p-title">{project.title}</h2>
            <p className="p-description">{project.description}</p>
            <div className="p-languages">
              <strong>Languages used:</strong> <span>{project.languages.join(', ')}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
