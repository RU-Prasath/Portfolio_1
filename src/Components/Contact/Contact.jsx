import React from 'react';
import './Contact.css';
import Ramen from '../../Assets/ramen.png'

const Contact = () => {
  return (
    <div className="c-com">
        <div className="c-left">
            <img src={Ramen} alt="Ramen" className='c-img' />
        </div>
        <div className="c-right">
            <form action="post">
                <span>Get In Touch</span>
                <div className="form-con">
                    <label htmlFor="Name">Name</label>
                    <input type="text" placeholder='Naruto'/>
                </div>
                <div className="form-con">
                    <label htmlFor="Email">Email</label>
                    <input type="email" placeholder='naruto@uzumaki.com'/>
                </div>
                <div className="form-con">
                    <label htmlFor="Message">Message</label>
                    <textarea name="w3review" rows="5" cols="50" />
                </div>
                <input className="button c-button" type="submit" value="Submit"></input>
            </form>
        </div>
    </div>
  )
}

export default Contact