import React from 'react';
import './style.css';
import img from "./img.jpg";
function inscrever(e) {
    e.preventDefault();
    alert('Você está inscrito! no curso de Tecnologia da Informação - Informática');
  }


function Card() {
    return(
        <div className="card-container">
            <h1 className = "Curso">
            Competência Transversal - Lógica de Programação
            </h1>
            <img src={img} alt="" />
            <div id="titulo">
            <h2>Modalidade: A Distância</h2>
            </div>
            <div id="info">
            <h2>Carga Horária: <p id= "hr">14 Horas</p></h2>
            <h2>Valor: <p id="hr">Gratuíto</p></h2>
            </div>
            <button className="btn" onClick={inscrever}><strong>Inscrever-se</strong></button>
        </div>
    );
}

export default Card;