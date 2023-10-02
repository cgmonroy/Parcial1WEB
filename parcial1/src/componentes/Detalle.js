import React from 'react';
import { useParams } from 'react-router-dom';
import datos from 'C:\Users\carlo\OneDrive\UNI\WEB\Parcial1WEB\parcial1\src\componentes\datos.json'; 
import { useIntl } from 'react-intl';
import { mensajesDetalle } from './mensajesDetalle';  

function Detalle() {
  const intl = useIntl();
  const { id } = useParams();
  const parte = datos[id];

  return (
    <div className="detalle-container">
      <h2>{intl.formatMessage(mensajesDetalle.detalleHeader)}</h2>
      <div className="parte-details">
        <img src={parte.image} alt={parte.partName} />
        <h3>{parte.partName}</h3>
        <p>{intl.formatMessage(mensajesDetalle.marcaLabel)} {parte.carMaker}</p>
        <p>{intl.formatMessage(mensajesDetalle.modeloLabel)} {parte.carModel}</p>
        <p>{intl.formatMessage(mensajesDetalle.anoLabel)} {parte.carYear}</p>
        <p>{intl.formatMessage(mensajesDetalle.disponibilidadLabel)} {parte.available ? intl.formatMessage(mensajesDetalle.disponibleLabel) : intl.formatMessage(mensajesDetalle.noDisponibleLabel)}</p>
        <p>{intl.formatMessage(mensajesDetalle.precioLabel)} {parte.price}</p>
        <p>{intl.formatMessage(mensajesDetalle.descripcionLabel)} {parte.description}</p>
      </div>
    </div>
  );
}

export default Detalle;
