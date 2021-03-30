import React from 'react';
import { FaRegThumbsUp } from "react-icons/fa";
import { BsFillAwardFill } from "react-icons/bs";
import { ImAirplane } from "react-icons/im";
import { IoIosPeople } from "react-icons/io";
import '../CSS/Technology.css'

const MyTechnology = () =>{
    return(
        <div>
            <div className="factsandfigures">
                <div>
                    <h1 className="factsandfigures_heading">FACTS &amp; FIGURES</h1>
                </div>
                <div className="factsandfigures2">
                    <div className="factsandfigurescolumn">
                        <BsFillAwardFill size="3em" color="white" />
                        <h1 className="factsandfigures_heading">15+</h1>
                        <p className="factsandfigures_paragraph">YEARS IN BUSINESS</p>
                    </div>
                    <div className="factsandfigurescolumn">
                        <FaRegThumbsUp size="3em" color="white" />
                        <h1 className="factsandfigures_heading">80+</h1>
                        <p className="factsandfigures_paragraph">FORTUNE 500 CLIENTS</p>
                    </div>
                    <div className="factsandfigurescolumn">
                        <ImAirplane size="3em" color="white" />
                        <h1 className="factsandfigures_heading">10+</h1>
                        <p className="factsandfigures_paragraph">COUNTRIES</p>
                    </div>
                    <div className="factsandfigurescolumn">
                        <IoIosPeople size="3em" color="white" />
                        <h1 className="factsandfigures_heading">12K+</h1>
                        <p className="factsandfigures_paragraph">EMPLOYEES STAFFED</p>
                    </div>
                </div>
            </div>

            <div className="certifications">
                <h1 className="certifications_heading">CERTIFICATIONS</h1>
                <div className="certifications2">
                    <div className="certification_column">
                        <img src="certificate1.png" alt="Certificate1" />
                    </div>
                    <div className="certification_column">
                        <img src="certificate2.png" alt="Certificate2" />
                    </div>
                </div>
            </div>

            <div className="clients">
                <div className="clients_column client1">
                    <img src="client.png" width="95%" alt="client1"/>
                </div>
            </div>

            <div className="testimonials">
                <div className="testimonials_column">
                    <h1>TESTIMONIALS</h1>
                    <p className="testimonials1">
                        "With almost 15 years of excellence and
                        experience at Ateeca, we have been endeavouring to acclimatize constantly to stay up to
                        date and meet the dynamic needs of the existing market and gratifying our customers."
                    </p>
                </div>
                <div className="testimonials_column testimonials2">
                    <p className="testimonials2_paragraph">
                    "With almost 15 years of excellence and experience at Ateeca,
                    we have been endeavouring to acclimatize constantly to stay up
                    to date and meet the dynamic needs of the existing market and
                    gratifying ourcustomers."
                    <p className ="testimonials_by">
                        By- <br/>
                        Shafeek Abdul Salam<br/>
                        IT Manager
                    </p>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default MyTechnology;