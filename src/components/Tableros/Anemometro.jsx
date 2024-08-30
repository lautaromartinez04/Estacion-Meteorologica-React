import React from "react";
import "./styles/Anemometro.css";
import { useFetch } from "../../hooks/useFetch";


export const Anemometro = () => {

  const { data, isLoading, errors } = useFetch(
    "https://66d1a5cf62816af9a4f4652b.mockapi.io/Datos"
  );

  if (isLoading) {
    return (
      <div id="Anemometro" className="parametro">
        <p>Cargando...</p>
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
