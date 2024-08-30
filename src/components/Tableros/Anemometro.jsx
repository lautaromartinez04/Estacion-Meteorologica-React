import React from "react";
import "./styles/Anemometro.css";
import { useFetch } from "../../hooks/useFetch";
import cargando from "../../assets/images/cargando.gif";

 
export const Anemometro = () => {

  const { data, isLoading, errors } = useFetch(
    "https://66d1a5cf62816af9a4f4652b.mockapi.io/Datos"
  );

  if (isLoading) {
    return (
      <div id="Anemometro" className="parametro">
        <img src={cargando} alt="" style={{ width: "90%" }}></img>
      </div>
    )
  } else if (errors) {
    return (
      <div id="Anemometro" className="parametro">
        <p>{errors}</p>
      </div>
    )
  }
  console.log(data[0].Anemometro);

  const rotationAnemometro = (data[0].Anemometro) * 4 - 120;

  return (
    <div id="Anemometro" className="parametro">
      <h2 className="AnemometroTitulo">Anemómetro</h2>
      <div className="containerAnemometro">
        <div className="velocimetroAnemometro">
          <div className="speedometerAnemometro">
            <img
              src="https://imagizer.imageshack.com/v2/240x334q70/c/923/8a3v89.png"
              alt=""
              id="agujaAnemometro"
              style={{ transform: `rotate(${rotationAnemometro}deg)` }}
            ></img>
          </div>
        </div>
        <p className="valor">
          <span id="valorAnemometro">{data[0].Anemometro}</span>Km/h
        </p>
      </div>
    </div>
  );
};
