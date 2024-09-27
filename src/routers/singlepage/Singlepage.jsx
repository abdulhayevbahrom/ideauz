import React from "react";
import "./Singlepage.css"
import { IoChevronForward } from "react-icons/io5";



function Singlepage() {
    return(
        <div className="singlepage">
            <header>
                <div className="nav">
                    <a href="/">Главная</a>
                    <IoChevronForward />
                    <a href="/">Бытовая техника</a>
                    <IoChevronForward />
                    <a href="/">Крупная бытовая техника</a>
                    <IoChevronForward />
                    <a href="/">Холодильники</a>
                    <IoChevronForward />
                    <a href="/">Холодильники Fe</a>
                    <IoChevronForward />
                    <a href="/">Холодильник Ferre BCD275 </a>
                </div>
            </header>

            <div className="plus">
                <div className="protect">
                    
                </div>
            </div>
        </div>
    )
}

export default Singlepage;