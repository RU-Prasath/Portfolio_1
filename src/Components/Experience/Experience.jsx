import React from 'react';
import './Experience.css';
import ex0 from '../../Assets/ex0.png';
import ex1 from '../../Assets/ex1.png';
import ex2 from '../../Assets/ex2.png';
import ex3 from '../../Assets/ex3.png';

const Experience = () => {
  return (
    <div className="e-com" id='Experience'>
      <div className="e-img">
        <ul>
          <li>
            <img src={ex0} alt="ex0" />
            <div className="experience-info">
              <div className="experience-title">HTML & CSS</div>
              <div className="experience-topic">+1 Year</div>
            </div>
          </li>
          <li>
            <img src={ex1} alt="ex1" />
            <div className="experience-info">
              <div className="experience-title">Bootstrap 5 & Javascript</div>
              <div className="experience-topic">6 Months</div>
            </div>
          </li>
          <li>
            <img src={ex2} alt="ex2" />
            <div className="experience-info">
              <div className="experience-title">React JS</div>
              <div className="experience-topic">+8 Months</div>
            </div>
          </li>
          <li>
            <img src={ex3} alt="ex3" />
            <div className="experience-info">
              <div className="experience-title">Shopify</div>
              <div className="experience-topic">+4 Months</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
