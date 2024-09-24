import React from "react";
import "./Heart.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiShoppingBag } from "react-icons/ti";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import rasm from "./heart-empty.webp";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromHeart, clearHeart } from "../../context/heartSlice";
import { useDispatch } from "react-redux";

function Heart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const heartData = useSelector((ombor) => ombor.heart);

  return (
    <div className="heart">
      {!heartData.length ? (
        <div className="main">
          <img src={rasm} alt="" />
          <h1>В избранном пока ничего нет</h1>
          <p>
            Вы можете добавлять товары кликая на сердечко , которое находится
            прямо на карточке товара
          </p>
          <button onClick={() => navigate("/")}> Перейти в главное меню</button>
        </div>
      ) : (
        <div className="box">
          <div className="saidbar">
            {heartData?.map((item, index) => (
              <div key={index} className="tovar">
                <img src={item.images[0]} alt="" />

                <div className="text">
                  <h2>{item.price} сум х 6 мес</h2>
                  <p>{item.name}</p>
                  <p>Код товара: 9118</p>
                </div>

                <div className="item_icon">
                  <RiDeleteBin6Line
                    onClick={() => {
                      dispatch(removeFromHeart(item.id));
                    }}
                  />
                  <TiShoppingBag />
                  <LiaBalanceScaleSolid />
                </div>
              </div>
            ))}
          </div>

          <div className="modal">
            <h4>Ваш список желаний</h4>
            <p>Количество продуктов</p>
            <hr />
            <button className="btn1" onClick={() => dispatch(clearHeart())}>
              Hammasini o'chirish
            </button>
            <button className="btn2">Перейти в корзину</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Heart;
