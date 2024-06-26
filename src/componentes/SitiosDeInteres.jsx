import React from 'react';

const SitiosDeInteres = () => {
    return (
        <div className="flex justify-center h-screen p-6">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">Sitios de Interés</h1>
                <ul className="list-none">
                    <li className="mb-2">
                        <a href="https://www.smn.gob.ar/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Servicio Meteorológico Nacional 🌧️</a>
                    </li>
                    <li className="mb-2">
                        <a href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline">UDEMY 👨🏽‍🎓</a>
                    </li>
                    <li className="mb-2">
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">GitHub [ ]</a>
                    </li>
                    <li className="mb-2">
                        <a href="https://es.stackoverflow.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">stack<b>overflow </b> 
                        🤓 </a>
                    </li>
                    <li className="mb-2">
                        <a href="https://www.argentina.gob.ar/noticias/huerta-urbana-ocho-claves-para-producir-alimentos-todo-el-ano" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">Huerta Urbana 🌱</a>
                    </li>
                    <li className="mb-2">
                        <a href="https://www.youtube.com/@FaztCode" target="_blank" rel="noopener noreferrer" className="text-red-500  hover:underline">Fazt Code ⏯️</a>
                    </li>
                    <li className="mb-2">
                        <a href="https://asociacionhidroponica.com.ar/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">A. <span className="text-lime-500 hover:underline">Hidroponica</span> <span className="text-blue-400 hover:underline">Argentina</span> 🍃💧</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SitiosDeInteres;


