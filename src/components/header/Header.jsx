import React from "react";
import HeaderTop from "./HeaderTop";
import { FaBars, FaSearch,  } from 'react-icons/fa';
import { CiHeart } from "react-icons/ci";
import { CgShoppingBag } from "react-icons/cg";
import { FaBalanceScale } from 'react-icons/fa';
import { LuUser2 } from "react-icons/lu";
import "./Header.css";

function Header() {
  return (
    <header>
      <HeaderTop />
      <nav>
        <img src="https://premier.uz/files/global/partners/idea_logo.png" alt="" />
        <button className="h_btn_1">Mahsulotlar katologi <span>    <FaBars /></span></button>
        <input type="text" placeholder="Qidiruv" /> <button className="input_btn">   <FaSearch /></button>
        <div className="header_icon">
          <div className="h_icon_item">
            <div>
            <CiHeart className="h_icon"/>
            <span><sup>0</sup></span>
            </div>
            <div>
            <p>Tanlanganlar</p>
            
            </div>
          </div>
          <div className="h_icon_item">
            <div>

          <CgShoppingBag className="h_icon"/><span><sup>0</sup></span>
            </div>
          <p>Savatcha</p>
          </div>
          <div className="h_icon_item">
            <div>
              
          <FaBalanceScale className="h_icon" /><span><sup>0</sup></span>
            </div>
          <p>Taqqoslash</p>
          </div>
          <div className="h_icon_item">
            <div>

          <LuUser2 className="h_icon"/>
            </div>
          <p>Kirish</p>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
