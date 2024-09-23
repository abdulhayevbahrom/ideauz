import React from "react";
import HeaderTop from "./HeaderTop";
import { FaBars } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingBag } from "react-icons/cg";
import { FaBalanceScale } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import "./Header.css";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

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
          <Link to="/heart" className="header_links_item">
            <span>0</span>
            <AiOutlineHeart />
            <p>Tanlanganlar</p>
          </Link>

          <Link to="/cart" className="header_links_item">
            <span>0</span>
            <CgShoppingBag />
            <p>Savatcha</p>
          </Link>

          <Link to="/compare" className="header_links_item">
            <span>0</span>
            <FaBalanceScale />
            <p>Taqqoslash</p>
          </Link>

          <Link to="/login" className="header_links_item">
            <LuUser2 />
            <p>Kirish</p>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
