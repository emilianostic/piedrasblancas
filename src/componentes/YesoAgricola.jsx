import '../styles.css'; // Importamos un archivo CSS para los estilos
import posterYesoer from '../img/posterYesoer.jpeg' // Importa tu imagen aquí
const YesoAgricola = () =>{

    return (<>
    <div class="text-center border rounded p-6">
        <h1 class="text-2xl font-bold mb-4">Yeso Agrícola - YESOER</h1>
        <p class="mb-4">YESOER es yeso agrícola mineral 100% natural</p>
        <h4 class="text-lg font-bold mb-2">Presentación:</h4>
        <ul >
            <li>Yeso Natural en Piedra: granulometría de 5 a 40 cm.</li>
            <li>Granulado de 1 a 5mm.</li>
            <li>Granulado menor a 1mm-</li>
            <li>En bolsas de 40 Kg.</li>
            <li>A Granel</li>
        </ul>
    </div>
<div className="flex flex-col items-center justify-center h-full">
<img src={posterYesoer} alt="Poster Yesoer" className="posterYesoer" />
</div></> );
};
export default YesoAgricola