import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette } from '@fortawesome/free-solid-svg-icons';
import Resume from './Prasath_CV.pdf'

const Services = () => {
  // Define objects for coding and design
  const codingSkills = ['HTML', 'CSS', 'JS', 'BS 5', 'React'];
  const designTools = ['Canva', 'VivaCut', 'Kinemaster'];

  return (
    <div className="s-com" id='Services'>
      <div className="s-left">
        {codingSkills.map((skill, index) => (
          <div className="s-container" key={index}>
            <FontAwesomeIcon className="s-icon" icon={faCode} />
            <span className='s-text'>{skill}</span>
          </div>
        ))}
        {designTools.map((tool, index) => (
          <div className="s-container" key={index}>
            <FontAwesomeIcon className="s-icon" icon={faPalette} />
            <span className='s-text'>{tool}</span>
          </div>
        ))}
      </div>
      <div className="s-right">
        <span>My Awesome</span>
        <span>Services</span>
        <span>Crafting dynamic and user-centric websites tailored to your vision and goals.
            <br /><br />From elegant designs to robust functionality, I specialize in delivering bespoke web solutions that elevate your online presence.
            <br /><br />Let's collaborate to bring your ideas to life and make an impact in the digital world.</span>
        <a href={Resume} download="Naruto_CV">
          <button className="button s-button">Download CV</button>
        </a>
      </div>
    </div>
  );
}

export default Services;