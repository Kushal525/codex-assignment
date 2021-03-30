import React from 'react';
import '../CSS/AboutUs.css'

const MyAboutUs = () =>{
    return(
        <div className="AboutUs">
            <div className=" aboutusleft column">
                <img src ="AboutUs.png" alt="Aboutus" />        
            </div>
            <div className="aboutusright column">
                <h1>WELCOME TO <br/><span>ATEECA</span></h1>
                <p>Ateeca Inc started by women entrepreneurs in the state of New
                    Jersey in the year 2005 with core focus to provide exceptional
                    Information Technology, Engineering, Scientific/clinical, Admin/-
                    clerical & Accounting/Finance, professionals to manage time
                    sensitive, mission critical process across the Enterprise.
                </p>
                <button className="aboutusbutton">Read More</button>
            </div>
        </div>
    );
}
export default MyAboutUs;