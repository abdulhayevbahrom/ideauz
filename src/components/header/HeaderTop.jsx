// import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPercent } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import uzFlag from "./image.png";
import React, { useState } from "react";
import rusFlag from "../../assets/rusFlag.png";
import uzbFlag from "../../assets/uzbflag.png";

function HeaderTop() {
  return (
    <div className="header_top">
      <div className="left">
        <p>
          <FaPercent /> <span>Aksiya va chegirmalar</span>
        </p>
        <p>
          <FaLocationDot /> <span>Do'konlar</span>
        </p>
      </div>
      <div className="right">
        <a href="tel:+998939119572">
          <FaPhone />
          77 230 77 99
        </a>

        <div className="language">
          <img src={uzFlag} alt="Flag" />
          <p>O'zbekcha</p>
          <FaChevronDown />
          <div className="lang">
            <h3>Tilni tanglang</h3>
            <div className="langItem">
              <input type="radio" />
              <img src={rusFlag} alt="" />
              Russkiy
            </div>
            <div className="langItem">
              <input type="radio" />
              <img src={uzbFlag} alt="" />
              O'zbekcha
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
