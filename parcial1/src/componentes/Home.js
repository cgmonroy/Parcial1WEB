import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import datos from 'C:\Users\carlo\OneDrive\UNI\WEB\Parcial1WEB\parcial1\src\componentes\datos.json'; 
import { useIntl } from 'react-intl';
import { mensajesHome } from './mensajesHome';

function Home() {
    const intl = useIntl();

    const partes = datos;

  return (
    <div className="home-container">
      <h2>{intl.formatMessage(mensajesHome.homeHeader)}</h2>
      <div className="car-list">
        {partes.map((parte, index) => (
          <div key={index} className="car-card">
            <img src={parte.image} alt={parte.partName} />
            <h3>{parte.partName}</h3>
            <p>{intl.formatMessage(mensajesHome.marcaLabel)} {parte.carMaker}</p>
            <p>{intl.formatMessage(mensajesHome.precioLabel)} {parte.price} - {intl.formatMessage(mensajesHome.anoLabel)} {parte.carYear}</p>
            <Link to={`/detalle/${index}`}>{intl.formatMessage(mensajesHome.verDetalles)}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
