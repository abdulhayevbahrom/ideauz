import React from "react";
import "./Singlepage.css";
import { IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";

function Singlepage() {
  return (
    <div className="singlepage">
      <div className="header_top1">
        <nav>
          <Link to="/">Bosh sahifa</Link>
          <IoChevronForward />
          <Link to="/">Maishiy texnika</Link>
          <IoChevronForward />
          <Link to="/">Katta maishiy texnika</Link>
          <IoChevronForward />
          <Link to="/">Sovutgichlar</Link>
          <IoChevronForward />
          <Link to="/">Sovutgichlar Ferre</Link>
          <IoChevronForward />
          <Link to="/">Холодильник Ferre BCD275</Link>
        </nav>
      </div>
      <div className="malumot"></div>
    </div>
  );
}

export default Singlepage;
