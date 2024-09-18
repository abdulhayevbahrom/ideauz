import React, { useState } from "react";
import "./Bo'sh.css";
import uzFlag from "./image.png"; 
import ruFlag from "./image.png"; 

const LanguageSelector = () => {
  const [language, setLanguage] = useState("O'zbekcha"); // Default til

  const changeLanguage = (lang) => {
    setLanguage(lang); 
  };

  return (
    <div className="language-selector">
      <p>Tilni tanlang</p>
      <div className="option" onClick={() => changeLanguage("Русский")}>
        <input
          type="radio"
          name="language"
          value="Русский"
          checked={language === "Русский"}
          onChange={() => changeLanguage("Русский")}
        />
        <img src={ruFlag} alt="Russian flag" width={20} />
        <label>Русский</label>
      </div>
      <div className="option" onClick={() => changeLanguage("O'zbekcha")}>
        <input
          type="radio"
          name="language"
          value="O'zbekcha"
          checked={language === "O'zbekcha"}
          onChange={() => changeLanguage("O'zbekcha")}
        />
        <img src={uzFlag} alt="Uzbek flag" width={20} />
        <label>O'zbekcha</label>
      </div>
    </div>
  );
};

export default LanguageSelector;