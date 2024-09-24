import React from "react";
import "./Compare.css";
import { Link } from "react-router-dom";
// import compareEmpty from "./images/comparion-empty.webp";
import { GoChevronRight } from "react-icons/go";

function Compare() {
  return (
    <div className="compare">
      {/* <div className="empty-compare">
        <div className="path-link">
          <Link to={"/"}>Bosh sahifa</Link>
          <span>
            <GoChevronRight className="go-chevron" />
            Taqqoslash
          </span>
        </div>
        <div className="container">
          <img src={compareEmpty} alt="" />
          <div className="empty-info">
            <h2>Taqqoslashga hozircha hech narsa yoʻq</h2>
            <p>
              Mahsulot kartochkasida joylashgan halqalar orqali, taqqoslashni
              bosib mahsulotlarni qoʻshishingiz mumkin
            </p>
            <Link to={"/"}>Bosh sahifaga oʻtish</Link>
          </div>
        </div>
      </div> */}
      <div className="data-compare">
        <div className="path-link">
          <Link to={"/"}>Bosh sahifa</Link>
          <span>
            <GoChevronRight className="go-chevron" />
            Taqqoslash
          </span>
        </div>
        <div className="container"></div>
      </div>
    </div>
  );
}

export default Compare;
