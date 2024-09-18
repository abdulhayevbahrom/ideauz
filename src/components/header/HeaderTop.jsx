// import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPercent } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import uzFlag from "./image.png";
import React, { useState } from 'react';



function HeaderTop() {
  const [showDropdown, setShowDropdown] = useState(false);
  
  const handleButtonClick = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className="header_top">
      <div className="left">
      <FaPercent className="foiz" /> <span>Aksiya va chegirmalar</span>
      <FaLocationDot className="location"/> <span>Do'konlar</span>
      
      </div>
      <div className="right">
      <FaPhone  className="phone"/> <span className="number">77 230 77 99</span>
        <img src={uzFlag} /><button className="h_last_button" onClick={handleButtonClick} >
        {showDropdown && (
        <div className ="showDropdown">
          <p>Tilni tanlang</p>
          <div>
            <input type="radio" id="russian" name="language" value="russian" />
            <label htmlFor="russian">Русский</label>
          </div>
          <div>
            <input type="radio" id="uzbek" name="language" value="uzbek" />
            <label htmlFor="uzbek">
              <img src={uzFlag} alt="Uzbek Flag" style={{ width: "20px", marginRight: "5px" }} />
              O'zbekcha
            </label>
          </div>
        </div>
      )}
           O'zbekcha <FaChevronDown className="last_top"/></button>
      </div>
    </div>
  );
}

export default HeaderTop;
