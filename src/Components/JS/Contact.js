import React from 'react';
import { ImLocation2 } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import { AiFillPrinter } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import '../CSS/Contact.css';

const MyContact = () =>{
    return(
        <div className="contact">
            <div className="contact1">
                <h1 className="contact_heading get_in_touch">Get In Touch</h1>
            </div>
            <div className="contact2">
                <div className="contact_column contact1">
                    <h3 className="contact_heading">CORPORATE ADDRESS:</h3><hr className="contact_seperator_line"/>
                    <a className="contact_link" href="https://goo.gl/maps/4RfGVc7A6v4s8kQd9">
                        <ImLocation2 className="contact_icons" color="white" size="2em" />
                        <h4 className="contact_heading">Ateeca Inc, 107 B-1, Corporate Blvd,
                        NJ-07080, United States</h4>
                    </a>
                    <a className="contact_link" href="tel:+1 908-668-1250">
                        <IoCall className="contact_icons" color="white" size="2em" />
                        <h4 className="contact_heading">+1 908-668-1250</h4>
                    </a>
                    <a className="contact_link" href="fax:(908) 755-9567">
                        <AiFillPrinter className="contact_icons" color="white" size="2em" />
                        <h4 className="contact_heading">FAX: (908) 755-9567</h4>
                    </a>
                    <a className="contact_link" href="mailto:info@ateeca.com">
                        <GoMail className="contact_icons" color="white" size="2em" />
                        <h4 className="contact_heading">info@ateeca.com</h4>
                    </a>
                    <br/>
                    <br/>
                    <h3 className="contact_heading">REGISTERED ADDRESS</h3><hr className="contact_seperator_line"/>
                    <a className="contact_link" href="https://goo.gl/maps/4RfGVc7A6v4s8kQd9">
                    <ImLocation2 className="contact_icons" color="white" size="2em" />
                        <h4 className="contact_heading">Ateeca Inc, 107 B-1, Corporate Blvd,
                        NJ-07080, United States</h4>
                    </a>
                    <a className="contact_link" href="tel:+1 908-668-1250">
                        <IoCall className="contact_icons" color="white" size="2em" />
                        <h4 className="contact_heading">+1 908-668-1250</h4>
                    </a>
                </div>


                <div className="contact_column">
                    <h3 className="contact_heading">News:</h3><hr className="contact_seperator_line"/>  
                    <div>
                        <img src="news1.png" alt="News" />
                        <br />
                        <br />
                    </div>                  
                    <div>
                        <img src="news2.png" alt="News" />
                    </div>                  
                </div>


                <div className="contact_column">
                    <h3 className="contact_heading">INDUSTRY FOCUS</h3><hr className="contact_seperator_line"/>
                    <p className="contact_heading">Insurance <br /> 
                        Banking &amp; Finance <br /> 
                         Pharma &amp; Life Sciences <br /> 
                         Energy &amp; Utilities <br /> 
                         Retail <br /> 
                         Telecom <br /> 
                         Media 
                    </p>
                    <br/>
                    <br/>
                    <h3 className="contact_heading">TECHNOLOGY FOCUS:</h3><hr className="contact_seperator_line"/>
                    <p className="contact_heading">
                        Microsoft <br />
                        Java Technologies <br />
                        IBM AS/400 <br />
                        Database <br />
                        Testing
                    </p>
                </div>
            </div>
            <div>
                <footer className="footer">
                    <h4>© Copyright 2020. Ateeca. All Rights Reserved. Designed By Honeycomb</h4>
                </footer>
            </div>
        </div>
    );
}
export default MyContact;