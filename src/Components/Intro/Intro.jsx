import React from 'react';
import './Intro.css';
import Github from '../../Assets/github.png';
import LinkedIn from '../../Assets/linkedin.png';
import Instagram from '../../Assets/insta.png';
import Naruto from '../../Assets/naruto-intro.png';
import {motion} from 'framer-motion';

const Intro = () => {

    const transition = {duration: 2, type: 'spring'}

  return (
    <div className="i-com">
        <div className="i-left">
            <div className='i-name'>
                <span>Hy! I am</span>
                <span>Uzumaki Naruto</span>
                <span>Front-End Developer</span>
            </div>
            <button className="button i-button">Hire Me</button>
            <div className="i-icons">
                <img src={Github} alt="github" />
                <img src={LinkedIn} alt="linkedin" />
                <img src={Instagram} alt="instagram" />
            </div>
        </div>
        <div className="i-right">
            <img src={Naruto} alt="Naruto" />
            <div className="ball-container">
                <motion.span initial={{left: "86%"}} whileInView={{left: "46%"}} transition={transition} className='ball'></motion.span>
                <motion.span initial={{top: "-36%"}} whileInView={{top: "-16%"}} transition={transition}  className='ball'></motion.span>
                <motion.span initial={{left: "-76%"}} whileInView={{left: "16%"}} transition={transition}  className='ball'></motion.span>
                <motion.span initial={{left: "-86%"}} whileInView={{left: "19%"}} transition={transition}  className='ball'></motion.span>
                <motion.span initial={{left: "106%"}} whileInView={{left: "56%"}} transition={transition}  className='ball'></motion.span>
                <motion.span initial={{left: "20%", top: "36%"}} whileInView={{left: "-16%", top: "66%"}} transition={transition}  className='ball'></motion.span>
            </div>
        </div>
    </div>
  )
}

export default Intro