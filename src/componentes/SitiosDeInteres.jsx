import React from 'react';

const SitiosDeInteres = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">Sitios de Interés</h1>
                <ul className="list-none">
                    <li className="mb-2">
                        <a href="https://lalibertadavanza.com.ar/" className="text-blue-600 hover:underline">La Libertad Avanza</a>
                    </li>
                    {/* Agrega más hipervínculos aquí */}
                </ul>
            </div>
        </div>
    );
};

export default SitiosDeInteres;

