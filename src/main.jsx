import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
