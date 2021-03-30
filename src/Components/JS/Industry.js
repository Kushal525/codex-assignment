import React from 'react';
import { AiOutlineSafety } from "react-icons/ai";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { GiMedicines } from "react-icons/gi";
import { BsLightning } from "react-icons/bs";
import '../CSS/Industry.css';

const MyIndustry = () =>{
    return(
        <div>
            <div id="industry">
                <h1 className="industry_heading">INDUSTRIES</h1>
            </div>
            <div className="industry">
                <div className="column">
                    <div className="industry_icons">
                        <AiOutlineSafety size= "4em" color="white" />
                    </div>
                    <h2 className="industry_heading">INSURANCE</h2>
                    <p className="industry_paragraph">Ateeca’s Insurance team combines in-depth industry knowledge 
                        with proven methodologies and best practices to deliver
                        software services/solutions that meet the unique needs of
                        the Insurance industry to facilitate them accurately to assess
                        risk and manage customer relationships over time to achieve
                        financial success.
                        <button className="industry_button">Read More</button>
                    </p>
                </div>
                <div className="column">
                    <div className="industry_icons">
                        <HiOutlineCurrencyDollar  size= "4em" color="white" />
                    </div>
                    <h2 className="industry_heading">BANKING &amp; FINANCE</h2>
                    <p className="industry_paragraph">Ateeca’s Insurance team combines in-depth industry knowledge 
                        with proven methodologies and best practices to deliver
                        software services/solutions that meet the unique needs of
                        the Insurance industry to facilitate them accurately to assess
                        risk and manage customer relationships over time to achieve
                        financial success.
                        <button className="industry_button">Read More</button>
                    </p> 
                </div>
                <div className="column">
                    <div className="industry_icons">
                        <GiMedicines size= "4em" color="white" />
                    </div>
                    <h2 className="industry_heading">PHARMA &amp; LIFE SCIENCES</h2>
                    <p className="industry_paragraph">Ateeca’s Insurance team combines in-depth industry knowledge 
                        with proven methodologies and best practices to deliver
                        software services/solutions that meet the unique needs of
                        the Insurance industry to facilitate them accurately to assess
                        risk and manage customer relationships over time to achieve
                        financial success.
                        <button className="industry_button">Read More</button>
                    </p>
                </div>
                <div className="column">
                    <div className="industry_icons">
                        <BsLightning size= "4em" color="white" />
                    </div>
                    <h2 className="industry_heading">ENERGY &amp; UTILITIES</h2>
                    <p className="industry_paragraph">Ateeca’s Insurance team combines in-depth industry knowledge 
                        with proven methodologies and best practices to deliver
                        software services/solutions that meet the unique needs of
                        the Insurance industry to facilitate them accurately to assess
                        risk and manage customer relationships over time to achieve
                        financial success.
                        <button className="industry_button">Read More</button>
                    </p>
                    
                </div>
            </div>
        </div>
    );
}
export default MyIndustry;