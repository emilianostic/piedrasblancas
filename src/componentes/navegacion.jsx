import React, { useState } from 'react';
import "../styles.css"; // Importamos un archivo CSS para los estilos
import Hidroponia from './Hidroponia';
import YesoAgricola from './YesoAgricola';
import YesoConstruccion from './YesoConstruccion';
import DatosPersonales from './DatosPersonales';
import SitiosDeInteres from './SitiosDeInteres';
import Contacto from './Contacto';


const Navigation = () => {
  const [componenteActual, setComponenteActual] = useState(null);

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
        return <DatosPersonales />;
      default:
        return (
          <>
          <DatosPersonales/>
          </>
        );
    }
  };

  return (
    <div>
      <nav className="navigation">
        <ul className="navigation-list">
          <li className="navigation-item" onClick={() => setComponenteActual('hidroponia')}>
            Hidroponia
          </li>
          <li className="navigation-item" onClick={() => setComponenteActual('yeso-agricola')}>
            Yeso Agrícola
          </li>
          <li className="navigation-item" onClick={() => setComponenteActual('yeso-construccion')}>
            Yeso Construcción
          </li>
          <li className="navigation-item" onClick={() => setComponenteActual('sitios-de-interes')}>
            Sitios de Interés
          </li>
          <li className="navigation-item" onClick={() => setComponenteActual('contacto')}>
            Contacto
          </li>
          <li className="navigation-item" onClick={() => setComponenteActual('inicio')}>
            Inicio
          </li>
          <div class="flex items-center gap-6">
          <ion-icon name="menu-outline" class="text-3xl cursor-pointer"></ion-icon>

          </div>
          <h1 >
    Hello world!
  </h1>
        </ul>
      </nav>
      <div className="contenido">
        {mostrarComponente()}
      </div>
      
    </div>
  );
};

export default Navigation;

