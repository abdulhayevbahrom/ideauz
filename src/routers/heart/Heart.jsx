import React from "react";
import "./Heart.css"
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiShoppingBag } from "react-icons/ti";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import rasm from "./heart-empty.webp"
import rasm2 from "./We8MmmWP9ypxianCaHlX.webp"
import rasm3 from "./yi531xP5bLjtSdmEzkKU.webp"
import rasm4 from "./6T7t4cRHxt0Ss1z7RyR9.webp"

function Heart() {
  return (
  <div className="heart">
      <div className="main">
      <img src={rasm} alt="" />
      <h1>В избранном пока ничего нет</h1>  
      <p>Вы можете добавлять товары кликая на сердечко , которое находится прямо на карточке товара</p>
      <button> Перейти в главное меню</button>
    </div>
    <div className="box">
      <div className="saidbar">
        <div className="tovar">
          <img src={rasm2} alt="" />

          <div className="text">
            <h2>499 834 сум х 6 мес</h2>
            <p>Холодильник Ferre BCD275</p>
            <p>Код товара: 9118</p>
          </div>

          <div className="item_icon">
          <RiDeleteBin6Line />
          <TiShoppingBag />
<LiaBalanceScaleSolid />
          </div>
        </div>

        <div className="tovar">
          <img src={rasm3} alt="" />

          <div className="text">
            <h2>448 334 сум х 6 мес </h2>
            <p>Телевизор Premier 43PRM720 S VOICE</p>
            <p>Код товара: 5120</p>
          </div>

          <div className="item_icon">
          <RiDeleteBin6Line />
          <TiShoppingBag />
<LiaBalanceScaleSolid />
          </div>
        </div>

        <div className="tovar">
          <img src={rasm4} alt="" />

          <div className="text">
            <h2>1 598 000 сум х 6 мес</h2>
            <p>Смартфон Apple IPHONE 11 Black 128GB</p>
            <p>Код товара: 4034</p>
          </div>

          <div className="item_icon">
          <RiDeleteBin6Line />
          <TiShoppingBag />
<LiaBalanceScaleSolid />
          </div>
        </div>
      </div>

      
    {/* <div className="modal">
      <h4>Ваш список желаний</h4>
      <p>Количество продуктов</p>
      <hr />
      <button className="btn1">Очистить все</button>
      <button className="btn2">Перейти в корзину</button>
    </div> */}
    </div>
      </div>
  );
}

export default Heart;
