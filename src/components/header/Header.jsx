import React from "react";
import HeaderTop from "./HeaderTop";
import { FaBars } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingBag } from "react-icons/cg";
import { FaBalanceScale } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import "./Header.css";
import { FiSearch } from "react-icons/fi";

function Header() {
  return (
    <header>
      <HeaderTop />
      <nav>
        <img
          src="https://premier.uz/files/global/partners/idea_logo.png"
          alt=""
        />
        <button className="catalogBtn">
          Mahsulotlar katologi <FaBars />
        </button>
        <div className="searchbar">
          <input type="text" placeholder="Qidiruv" />
          <button>
            <FiSearch />
          </button>
        </div>

        <div className="header_links">
          <div className="header_links_item">
            <span>0</span>
            <AiOutlineHeart />
            <p>Tanlanganlar</p>
          </div>

          <div className="header_links_item">
            <span>0</span>
            <CgShoppingBag />
            <p>Savatcha</p>
          </div>

          <div className="header_links_item">
            <span>0</span>
            <FaBalanceScale />
            <p>Taqqoslash</p>
          </div>

          <div className="header_links_item">
            <LuUser2 />
            <p>Kirish</p>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
