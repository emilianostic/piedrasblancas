import "../styles.css"; // Importamos un archivo CSS para los estilos
import posterYesoer from "../img/posterYesoer.jpeg"; // Importa tu imagen aquí
const YesoAgricola = () => {
  return (
    <>
      <div class="text-center  p-6 text-white">
        <h1 class="text-2xl font-bold mb-4">Yeso Agrícola - YESOER</h1>
        <p class="mb-4">YESOER es yeso agrícola mineral 100% natural</p>
        <h4 class="text-lg font-bold mb-2">Presentación:</h4>
        <ul className="text-white">
          <li>Yeso Natural en Piedra: granulometría de 5 a 40 cm.</li>
          <li>Granulado de 1 a 5mm.</li>
          <li>Granulado menor a 1mm.</li>
          <li>En bolsas de 40 Kg.</li>
          <li>A Granel</li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center bg-white">
        <img
          src={posterYesoer}
          alt="Poster Yesoer"
          className="posterYesoer w-28 h-10"
        />
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <article className="text-justify text-white max-w-3xl p-5 font-medium">
          YESOER tiene una solubilidad mucho menor a la de los fertilizantes
          sintéticos, lo cual demuestra una importante ventaja porque bajo
          determinada distribución granulométrica (entre 1mm. y 5mm.), se logra
          una solubilización inmediata pero gradual y con efecto residual,
          evitando los inconvenientes y mermas de persistencia del azufre y
          calcio en el suelo generados por disoluciones instantáneas, como la de
          algunos pelletizados de yeso y el sulfato de amonio. El yeso no
          requiere maquinaria especial para su aplicación en cualquier momento.
          Se puede dosificar y distribuir tanto con sistemas por gravedad como
          con sistemas por fuerza centrífuga. Se puede aplicar tanto en
          cobertura como en hileras; en presiembra, postemergencia y con la
          siembra.
        </article>
      </div>
    </>
  );
};
export default YesoAgricola;
