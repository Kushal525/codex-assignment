import React from 'react';
import '../CSS/Home.css'

const MyHome = () =>{
    return(
        <div className="home">
            <div className="homeleft column">
                <h1 className="home_heading">Get Your<br/>Dream Job</h1>
                <p>Ateeca Inc started by women entrepreneurs in the state of New Jersey in the year
                    2005 with core focus to provide exceptional Information Technology, Engineering,
                    Scientific/clinical, Admin/clerical and Accounting/Finance, professionals to
                    manage time sensitive, mission critical process across the Enterprise
                </p>
                <button className="homebutton">Know More</button>
                <button className="homebutton">Get In Touch</button>
            </div>
            <div className="homeright column">
                <img src="Home.png" width="90%" alt="Home" />
            </div>
        </div>
    );
}
export default MyHome;