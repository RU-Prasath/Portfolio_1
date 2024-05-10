import React from 'react';
import './Navbar.css';
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className="n-com">
        <div className="n-left">
            <div className="n-name">UN</div>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'><li>Home</li></Link>
                    <Link spy={true} to='Services' smooth={true}><li>Services</li></Link>
                    <Link spy={true} to='Experience' smooth={true}><li>Experience</li></Link>
                    <Link spy={true} to='Projects' smooth={true}><li>Projects</li></Link>                    
                </ul>
            </div>
            <button className="button n-button">Contact</button>
        </div>
    </div>
  )
}

export default Navbar