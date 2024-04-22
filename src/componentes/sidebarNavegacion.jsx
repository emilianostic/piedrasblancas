import React from 'react';
import '../styles.css'; // Importamos un archivo CSS para los estilos

const SidebarNavigation = () => {
  return (
    <nav className="sidebar-navigation">
      <ul className="sidebar-navigation-list">
        <li className="sidebar-navigation-item">
          <a href="/datos-personales">Datos Personales</a>
        </li>
        <li className="sidebar-navigation-item">
          <a href="/hidroponia">EV hidroponia</a>
        </li>
        <li className="sidebar-navigation-item">
          <a href="/yeso-construccion">Yeso Construcción</a>
        </li>
        <li className="sidebar-navigation-item">
          <a href="/sitios-de-interes">Sitios de Interés</a>
        </li>
        <li className="sidebar-navigation-item">
          <a href="/contacto">Contacto</a>
        </li>
        <li className="sidebar-navigation-item">
          <a href="/documentacion">Documentación</a>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarNavigation;
