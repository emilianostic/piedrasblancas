import '../styles.css'; // Importamos un archivo CSS para los estilos
import YesoerPlaK from '../img/YesoerPlaK.png'; // Importa tu imagen aquí

const YesoConstruccion = () => {
  return (
    <>
      <img
        src={YesoerPlaK}
        alt="YesoerPlaK"
        className="text-center w-20 mx-auto"
      />
      <article className="text-center">
        <p>Denominación Comercial: YESOER PLAK</p>
        <p>
          Descripción Técnica: Yeso calcinado tipo hemihidratado de alta
          pureza, alta cremosidad, color blanco.
        </p>
        <p>Aplicaciones del Producto: Materiales prefabricados y todo tipo de moldería de alta resistencia. Ortopedia.</p>
        <p>Embalaje de presentación comercial:</p>
        <ul>
          <li>Bolsas de 40 Kg</li>
          <li>Big Bags</li>
        </ul>
      </article>
      <article className="text-center">
        <p>Yeso Tradicional</p>
      </article>
      <article className="text-center">
        <p>Yeso Obra Manual</p>
      </article>
    </>
  );
};

export default YesoConstruccion;
