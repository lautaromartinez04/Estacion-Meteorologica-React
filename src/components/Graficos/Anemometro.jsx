import React from 'react'
import './styles/Anemometro.css'

export const Anemometro = () => {
  return (
    <div className="centrador">
        <div className="parametro">
            <div style= {{display: 'flex', justifyContent: 'center'}}>
                <a href="index.html" >
                    <div className="volver">
        
                    </div>
                </a>
            </div>
            
            <h2>Anemómetro</h2>
            
            <div id="contornos">
                <div id="acomodar">
                    <div className="containerAnemometro">
                        <div className="velocimetroAnemometro">
                            <div className="speedometerAnemometro">
                                <img src="https://imagizer.imageshack.com/v2/240x334q70/c/923/8a3v89.png" alt="" id="agujaAnemometro">
                                </img>
                            </div>
                        </div>
                        
                        <p className="valor"><span id="valorAnemometro"></span>Km/h</p>
                    </div>
                </div>
            

            <div className="centradorgr">
                <div className="grafico">
                    <select name="hs" id="hs">
                        <option value="1d" selected>24 horas</option>
                        <option value="7d">7 días</option>
                        <option value="1m">1 mes</option>
                        <option value="1a">1 Año</option>
                    </select>
                    <div id="chartContainer" >
                        <canvas id="myChart"></canvas>
                    </div>
                </div>
            </div>
        </div>
            
        </div>
    </div>
  )
}
