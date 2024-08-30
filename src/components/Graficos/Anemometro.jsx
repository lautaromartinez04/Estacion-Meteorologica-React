import React, { useRef, useEffect, useState } from 'react';
import './styles/Anemometro.css';
import { useFetch } from "../../hooks/useFetch";
import { NavLink } from 'react-router-dom';
import Chart from 'chart.js/auto'; // Asegúrate de que Chart.js esté correctamente importado

export const Anemometro = () => {
  const { data, isLoading, errors } = useFetch("https://66d1a5cf62816af9a4f4652b.mockapi.io/Datos");
  console.log(data);
  const chartRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState("1d");

  const crearGrafico = (datos) => {
    const ctx = chartRef.current?.getContext('2d');
    if (!ctx) {
      console.error('No se pudo obtener el contexto del canvas');
      return;
    }

    if (!Array.isArray(datos)) {
      console.error('Los datos proporcionados no son un array');
      return;
    }

    if (chartRef.current && chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    chartRef.current.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: Array.from({ length: datos.length }, (_, i) => i + 1),
        datasets: [{
          label: 'Valores',
          data: datos,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 3,
          tension: 0.3
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            suggestedMax: 60
          }
        }
      }
    });
  };

  const actualizarGrafico = () => {
    let datos;
    if (selectedOption === "1h") {
      datos = data[0]?.Anemometro1H || [];
    }else if (selectedOption === "1d") {
      datos = data[0]?.Anemometro24HS || [];
    } else if (selectedOption === "7d") {
      datos = data[0]?.Anemometro7D || [];
    } else if (selectedOption === "1m") {
      datos = data[0]?.Anemometro30D || [];
    } else if (selectedOption === "1a") {
      datos = data[0]?.Anemometro1A || [];
    }
    console.log('Datos seleccionados:', datos); // Agregar para depuración
    crearGrafico(datos);
  };

  useEffect(() => {
    if (data && data.length > 0) {
      actualizarGrafico(); // Inicializar gráfico con la opción seleccionada
    }
  }, [data, selectedOption]);

  if (isLoading) {
    return (
      <div id="Anemometro" className="parametro">
        <p>Cargando...</p>
      </div>
    );
  } else if (errors) {
    return (
      <div id="Anemometro" className="parametro">
        <p>{errors}</p>
      </div>
    );
  }

  return (
    <div className="centradorAnemometro">
      <div className="parametroAnemometro">
        <NavLink to={"/"}>
          <div className="volver"></div>
        </NavLink>

        <h2>Anemómetro</h2>

        <div id="contornos">
          <div id="acomodar">
            <div className="containerAnemometro">
              <div className="velocimetroAnemometrogr">
                <div className="speedometerAnemometro">
                  <img
                    src="https://imagizer.imageshack.com/v2/240x334q70/c/923/8a3v89.png"
                    alt=""
                    id="agujaAnemometro"
                    style={{ transform: `rotate(${data[0]?.Anemometro * 4 - 120}deg)` }}
                  />
                </div>
              </div>
              <p className="valorAnemometro">
                <span id="valorAnemometro">{data[0]?.Anemometro}</span> Km/h
              </p>
            </div>
          </div>

          <div className="centradorgr">
            <div className="grafico">
              <select
                name="hs"
                id="hs"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option value="1h">1 hora</option>
                <option value="1d">24 horas</option>
                <option value="7d">7 días</option>
                <option value="1m">1 mes</option>
                <option value="1a">1 Año</option>
              </select>
              <div id="chartContainer">
                <canvas id="myChart" ref={chartRef}></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
