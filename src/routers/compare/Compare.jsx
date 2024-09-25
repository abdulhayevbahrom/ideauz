import React from "react";
import "./Compare.css";
import compareEmpty from "./images/comparion-empty.webp";
import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCompare } from "../../context/compare";
import { RiDeleteBin6Line } from "react-icons/ri";

function Compare() {
  const dispatch = useDispatch();
  const compareData = useSelector((omborCompare) => omborCompare.compare);
  return (
    <div className="compare">
      {!compareData.length ? (
        <div className="empty-compare">
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
        </div>
      ) : (
        <div className="data-compare">
          <div className="path-link">
            <Link to={"/"}>Bosh sahifa</Link>
            <span>
              <GoChevronRight className="go-chevron" />
              Taqqoslash
            </span>
          </div>
          <div className="property-options">
            <label htmlFor="property1">
              <input type="radio" name="property" id="property1" />
              Barcha hususiyatlar
            </label>
            <label htmlFor="property2">
              <input type="radio" name="property" id="property2" />
              Faqat farqlar
            </label>
          </div>
          <div className="container">
            {compareData?.map((product, index) => (
              <div className="compare-products-compare" key={index}>
                <div className="image">
                  <RiDeleteBin6Line
                    onClick={() => {
                      dispatch(removeFromCompare(product.id));
                    }}
                  />
                  <img src={product.image} alt="" />
                </div>
                <div className="name-price">
                  <span>
                    499.454 so'm <span className="small-text">X oy</span>
                  </span>
                </div>
              </div>
            ))}
            <div className="property-title">
              <h2>Umumiy xususiyatlar</h2>
            </div>
            {compareData?.map((property) => (
              <div className="mach-properties">
                <div className="property-name">
                  <h3>Rang</h3>
                  <p>{property.color}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Compare;
