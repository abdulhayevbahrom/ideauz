import React from "react";
import "./Compare.css";
import compareEmpty from "./images/comparion-empty.webp";
import { Link, useNavigate } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCompare } from "../../context/compare";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";

function Compare() {
  const dispatch = useDispatch();
  const compareData = useSelector((omborCompare) => omborCompare.compare);
  const navigate = useNavigate();

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
              <input type="radio" name="property" id="property1" focus />
              Barcha hususiyatlar
            </label>
            <label htmlFor="property2">
              <input type="radio" name="property" id="property2" />
              Faqat farqlar
            </label>
          </div>
          <div className="container">
            <div className="compare-products">
              {compareData?.map((product, index) => (
                <div className="compare-product" key={index}>
                  <div className="image">
                    <RiDeleteBin6Line
                      className="delete-compare"
                      onClick={() => {
                        dispatch(removeFromCompare(product.id));
                      }}
                    />
                    <img src={product.images[0]} alt="" />
                  </div>
                  <div className="name-price">
                    <h3>
                      {product.price} so'm
                      <span className="small-text"> X 6 oy</span>
                    </h3>
                    <Link>
                      <p>{product.name}</p>
                    </Link>
                  </div>
                </div>
              ))}
              {compareData.length <= 4 && (
                <div className="add-to-compare" onClick={() => navigate("/")}>
                  <FaPlus className="plus-icon" />
                  <p>Taqqoslash uchun qo'shish</p>
                </div>
              )}
            </div>
            <div className="property-title">
              <h2>Umumiy xususiyatlar</h2>
            </div>
            <div className="match-properties-container">
              {compareData?.map((property, index) => (
                <div key={index} className="match-properties">
                  <div className="property-name">
                    <h3>Operatsion tizim versiyasi</h3>
                    <p>Android 11</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Compare;
