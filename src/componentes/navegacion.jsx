import React from 'react';
import "../styles.css"; // Importamos un archivo CSS para los estilos

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li className="navigation-item">
          <a href="/datos-personales">Datos Personales</a>
        </li>
        <li className="navigation-item">
          <a href="/hidroponia">Hidroponia</a>
        </li>
        <li className="navigation-item">
          <a href="/yeso-agricola">Yeso Agrícola</a>
        </li>
        <li className="navigation-item">
          <a href="/yeso-construccion">Yeso Construcción</a>
        </li>
        <li className="navigation-item">
          <a href="/sitios-de-interes">Sitios de Interés</a>
        </li>
        <li className="navigation-item">
          <a href="/contacto">Contacto</a>
        </li>
        <li className="navigation-item">
          <a href="/documentacion">Documentación</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
