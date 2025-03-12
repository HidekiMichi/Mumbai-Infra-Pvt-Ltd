import React from "react";
import '../styles/HomeCss.css';
import Video from '../assets/homepagevideo.mp4';

const Home = () => {
    return (
        
        <div className="Homepage">
            <video className="background-video" autoPlay loop muted>
                <source src={Video} type="video/mp4" />
            </video>
            <div className="text-overlay">
                एक तरी स्वतःच घर असावं
                <br />
                (Everyone deserves at least one home to call their own)
                <br />
                तुमची स्वप्ने हे आमचे कर्तव्य आहे
                <br />
                (Your dreams are our duty)
            </div>
            <div className="marquee">
                <span>तुमचे स्वप्न साकार करण्यासाठी आम्ही कटिबद्ध आहोत (We are committed to fulfilling your dreams), (90% Loan, 10% Payment Only!),(1Rk, 1BHK, 2BHK), NEW Thane, (Get On Spot Sanction , Ready to Possossion).</span>
            </div>
        </div>
    );
}

export default Home;
