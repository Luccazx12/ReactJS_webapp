import React from 'react';
import './style.css';
import img from "./img.jpg";

function inscrever(e) {
    e.preventDefault();
    alert('Você foi inscrito no curso de: Automação Hidráulica Industrial');
  }

function Card() {
    return(
        <div className="card-container">
            <h1 className = "Curso">
            Automação Hidráulica Industrial
            </h1>
            <img src={img} alt="" />
            <div id="titulo">
            <h2>Modalidade: Presencial</h2>
            </div>
            <div id="info">
            <h2>Carga Horária: <p id= "hr">40 Horas</p></h2>
            <h2>Valor: <p id="hr">R$553,28</p></h2>
            </div>
            <button className="btn" onClick={inscrever}><strong>Inscrever-se</strong></button>
        </div>
    );
}

export default Card;