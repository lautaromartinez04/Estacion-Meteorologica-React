import React, { useEffect } from "react";
import "../styles/Home.css";
import { NavLink } from "react-router-dom";
import { Anemometro } from "./Tableros/Anemometro";
import soleado from "../assets/images/fondos/soleado.jpg";

const dia = "Soleado"; 

export const Home = () => {

  useEffect(() => {
    const fondo = document.getElementById("root");
    if (dia === "Soleado") {
      fondo.style.backgroundImage = `url(${soleado})`;
    }
  }, []);

  return (
    <div id="home">
      <NavLink to="/">
        <Anemometro />
      </NavLink>

      <NavLink to="/">
        <Anemometro />
      </NavLink>

      <NavLink to="/">
        <Anemometro />
      </NavLink>

      <NavLink to="/">
        <Anemometro />
      </NavLink>

      <NavLink to="/">
        <Anemometro />
      </NavLink>

      <NavLink to="/">
        <Anemometro />
      </NavLink>

      <NavLink to="/">
        <Anemometro />
      </NavLink>

      <NavLink to="/">
        <Anemometro />
      </NavLink>

      <NavLink to="/">
        <Anemometro />
      </NavLink>

      <NavLink to="/">
        <Anemometro />
      </NavLink>
    </div>
  );
};
