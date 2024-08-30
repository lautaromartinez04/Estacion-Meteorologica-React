import React from "react";
import "./styles/Anemometro.css";
export const Anemometro = () => {
  return (
    <div id="Anemometro" className="parametro">
      <h2>Anemómetro</h2>
      <div className="containerAnemometro">
        <div className="velocimetroAnemometro">
          <div className="speedometerAnemometro">
            <img
              src="https://imagizer.imageshack.com/v2/240x334q70/c/923/8a3v89.png"
              alt=""
              id="agujaAnemometro"
            ></img>
          </div>
        </div>
        <p className="valor">
          <span id="valorAnemometro"></span>Km/h
        </p>
      </div>
    </div>
  );
};
