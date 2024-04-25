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
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
        return <DatosPersonales />;
    }
  };

  return (
    <div>
      <nav className="navigation">
        {/* Navegación para pantallas más grandes que tablet */}
        <ul className="navigation-list hidden md:flex flex-col md:flex-row">
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
        </ul>
        
        {/* Icono de menú para pantallas más pequeñas */}
        <div className="flex items-center gap-6 md:hidden flex-col">
          <ion-icon name="menu-outline" className="text-3xl cursor-pointer" onClick={toggleMenu}></ion-icon>
        </div>

        {/* Menú desplegable para pantallas más pequeñas */}
        {menuOpen && (
          <ul className="navigation-list md:hidden flex-col">
            <li className="navigation-item" onClick={() => { setComponenteActual('hidroponia'); toggleMenu(); }}>
              Hidroponia
            </li>
            <li className="navigation-item" onClick={() => { setComponenteActual('yeso-agricola'); toggleMenu(); }}>
              Yeso Agrícola
            </li>
            <li className="navigation-item" onClick={() => { setComponenteActual('yeso-construccion'); toggleMenu(); }}>
              Yeso Construcción
            </li>
            <li className="navigation-item" onClick={() => { setComponenteActual('sitios-de-interes'); toggleMenu(); }}>
              Sitios de Interés
            </li>
            <li className="navigation-item" onClick={() => { setComponenteActual('contacto'); toggleMenu(); }}>
              Contacto
            </li>
            <li className="navigation-item" onClick={() => { setComponenteActual('inicio'); toggleMenu(); }}>
              Inicio
            </li>
          </ul>
        )}
      </nav>
      <div className="contenido">
        {mostrarComponente()}
      </div>
    </div>
  );
};

export default Navigation;


