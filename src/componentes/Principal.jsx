import React, { useState } from 'react';
import Navigation from './Navigation';
import Hidroponia from './Hidroponia';
import YesoAgricola from './YesoAgricola';
import YesoConstruccion from './YesoConstruccion';
import DatosPersonales from './DatosPersonales';
import SitiosDeInteres from './SitiosDeInteres';
import Contacto from './Contacto';

const Principal = () => {
  const [componenteActual, setComponenteActual] = useState('inicio');

  const mostrarComponente = () => {
    switch (componenteActual) {
      case 'hidroponia':
        return <Hidroponia />;
      case 'yeso-agricola':
        return <YesoAgricola />;
      case 'yeso-construccion':
        return <YesoConstruccion />;
      case 'sitios-de-interes':
        return <SitiosDeInteres />;
      case 'contacto':
        return <Contacto />;
      case 'inicio':
      default:
        return <DatosPersonales />;
    }
  };

  return (
    <div>
      <Navigation setComponenteActual={setComponenteActual} />
      <div>{mostrarComponente()}</div>
    </div>
  );
};

export default Principal;