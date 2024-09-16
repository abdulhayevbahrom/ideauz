import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPercent } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import uzFlag from "./image.png";



function HeaderTop() {
  return (
    <div className="header_top">
      <div className="left">
      <FaPercent className="foiz" /> <span>Aksiya va chegirmalar</span>
      <FaLocationDot className="location"/> <span>Do'konlar</span>
      
      </div>
      <div className="right">
      <FaPhone  className="phone"/> <span className="number">77 230 77 99</span>
        <img src={uzFlag} /><span className="last_span">O'zbekcha <FaChevronDown className="last_top"/></span>
      </div>
    </div>
  );
}

export default HeaderTop;
