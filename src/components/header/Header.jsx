import React, { useState } from "react";
import HeaderTop from "./HeaderTop";
import { FaBars } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingBag } from "react-icons/cg";
import { FaBalanceScale } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import "./Header.css";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../loginPage/Login";

function Header() {
  const heartData = useSelector((ombor) => ombor.heart);
  const compareData = useSelector((omborCompare) => omborCompare.compare);
  const cartData = useSelector((ombor) => ombor.cart);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  return (
    <header>
      <HeaderTop />
      {openModal && <Login />}
      <nav>
        <img
          src="https://premier.uz/files/global/partners/idea_logo.png"
          alt=""
          onClick={() => navigate("/")}
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
            <span>{heartData.length}</span>
            <AiOutlineHeart />
            <p>Tanlanganlar</p>
          </Link>

          <Link to="/cart" className="header_links_item">
            <span>{cartData.length}</span>
            <CgShoppingBag />
            <p>Savatcha</p>
          </Link>

          <Link to="/compare" className="header_links_item">
            <span>{compareData.length}</span>
            <FaBalanceScale />
            <p>Taqqoslash</p>
          </Link>

          <Link
            onClick={() => setOpenModal(!openModal)}
            className="header_links_item"
          >
            <LuUser2 />
            <p>Kirish</p>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
