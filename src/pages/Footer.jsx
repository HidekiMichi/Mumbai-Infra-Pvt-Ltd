import React from 'react';
import'../styles/FooterCSS.css';
import footerlogo from "../assets/final-LogoFINAL.png";
const Footer = () =>{
    return (
        <div className="footerdiv">
            <img 
                src={footerlogo}
                alt="Logo"
                className="footerimg"
                
            />
            <p className='footertext'>we offer homes where dreams come to life.
                <br/>Imagine a space where every corner reflects your aspirations,
                 <br/>a home filled with warmth, comfort, and 
                 <br/>the promise of a beautiful future.</p>
           
            <div className='subfooter'>
                 <p className='Copyrighttext'>©2024. MumbaInfra. All Rights Reserved.</p>
                <p className='termsCondition'>Terms & Condition Privacy Policy</p>
                
               
            </div>
        </div>
    )
}

export default Footer;