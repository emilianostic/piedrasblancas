import React, { useState, useEffect } from 'react';

const Navigation = ({ setComponenteActual }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
      if (!isMobile && menuOpen) {
        setMenuOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen, isMobile]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <svg
                className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex">
                <button
                  onClick={() => setComponenteActual('hidroponia')}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Hidroponia
                </button>
                <button
                  onClick={() => setComponenteActual('yeso-agricola')}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Yeso Agrícola
                </button>
                <button
                  onClick={() => setComponenteActual('yeso-construccion')}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Yeso Construcción
                </button>
                <button
                  onClick={() => setComponenteActual('sitios-de-interes')}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sitios de Interés
                </button>
                <button
                  onClick={() => setComponenteActual('contacto')}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contacto
                </button>
                <button
                  onClick={() => setComponenteActual('inicio')}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Inicio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${menuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3">
          <button
            onClick={() => { setComponenteActual('hidroponia'); setMenuOpen(false); }}
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Hidroponia
          </button>
          <button
            onClick={() => { setComponenteActual('yeso-agricola'); setMenuOpen(false); }}
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Yeso Agrícola
          </button>
          <button
            onClick={() => { setComponenteActual('yeso-construccion'); setMenuOpen(false); }}
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Yeso Construcción
          </button>
          <button
            onClick={() => { setComponenteActual('sitios-de-interes'); setMenuOpen(false); }}
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Sitios de Interés
          </button>
          <button
            onClick={() => { setComponenteActual('contacto'); setMenuOpen(false); }}
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contacto
          </button>
          <button
            onClick={() => { setComponenteActual('inicio'); setMenuOpen(false); }}
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

