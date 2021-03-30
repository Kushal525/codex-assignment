import React from 'react';
import '../CSS/Services.css'

const MyServices = () =>{
    return(
        <div className="services">
            <div className="services_column">
                <div className="services services_border">
                    <div className="services_column services_left_part ">
                        <img src="servicesleftpart1.png" alt="STAFFING"/>
                    </div>
                    <div className="services_column">
                        <h3 className="services_heading">STAFFING</h3>
                        <hr/>
                        <p className="services_heading">Read More</p>
                    </div>
                </div>
                <div className="services services_border">
                    <div className="services_column">
                        <h3 className="services_heading">PAYROLLING</h3>
                        <hr/>
                        <p className="services_heading">Read More</p>
                    </div>
                    <div className="services_column services_left_part2">
                        <img src="servicesleftpart2.png" alt="STAFFING"/>
                    </div>  
                </div>
                <div className="services services_border">
                    <div className="services_column services_left_part">
                        <img src="servicesleftpart3.png" alt="STAFFING"/>
                    </div>
                    <div className="services_column">
                        <h3 className="services_heading">IT SERVICES</h3>
                        <hr/>
                        <p className="services_heading">Read More</p>
                    </div>
                </div>
                <div className="services services_border left_part4">
                    <div className="services_column">
                        <h3>RECRUITMENT PROCESS OUTSOURCING</h3>
                        <p>Ateeca’s with its Core Competence in Recruitment &amp; Professional Staffing has 
                            acquired unique capabilities to locate, recruit and retain the right
                            talent and obtain the highest possible level of customer satisfaction. We
                            service a broad client base in the Finance, Insurance, Energy, Manufacturing, 
                            pharmaceutical, retail, and services industries..
                        </p>
                        <p>Read More</p>
                    </div>
                </div>
            </div>
            <div className="services_column">
                <div className="services_image1">
                    <img src="services3.png" alt="services" />
                </div>
                <div className="services_image2">
                    <img src="services4.png" alt="services" />
                </div>
            </div>
        </div>
    );
}
export default MyServices;