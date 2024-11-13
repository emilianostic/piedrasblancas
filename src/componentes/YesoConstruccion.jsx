import "../styles.css"; // Importamos un archivo CSS para los estilos
import YesoerPlaK from "../img/YesoerPlaK.png"; // Importa tu imagen aquí

const YesoConstruccion = () => {
  return (
    <>
      <article className="text-center text-white">
        <p>Denominación Comercial: YESOER PLAK</p>
        <p>
          Descripción Técnica: Yeso calcinado tipo hemihidratado de alta pureza,
          alta cremosidad, color blanco.
        </p>
        <p>
          Aplicaciones del Producto: Materiales prefabricados y todo tipo de
          moldería de alta resistencia. Ortopedia.
        </p>
        <p>Embalaje de presentación comercial:</p>
        <ul>
          <li>Bolsas de 40 Kg</li>
          <li>Big Bags</li>
        </ul>
      </article>
      <article className="text-center text-white">
        <p>Yeso Tradicional</p>
      </article>
      <article className="text-center text-white mb-20">
        <p>Yeso Obra Manual</p>
      </article>
      <div className="flex flex-col items-center justify-center bg-white">
        <img
          src={YesoerPlaK}
          alt="YesoerPlaK"
          className="text-center w-24 h-12"
        />
      </div>
      <div className="flex flex-col items-center justify-center h-full mb-23 ">
        <article className="text-justify text-white max-w-3xl p-5 font-medium mb-10">
          Instrucciones de Uso: Preparar solo la cantidad que se necesite para
          el llenado de un molde. Mantener la relación agua/yeso especificada
          (0,9). Colocar en un envase el agua necesaria y espolvorear el yeso
          mientras se revuelve la mezcla. Cuando termine de verter el yeso,
          agitar hasta que no queden grumos tratando de que no ingrese aire a la
          mezcla. Se puede usar batidor manual de alambre o mecánico. El tiempo
          de mezcla recomendado es de 30 segundos. Verter la mezcla en el molde
          y esperar que termine el fragüe. Para una mezcla de 90gr de agua y
          100gr de yeso, el desmolde podrá ser efectuado sin inconveniente,
          luego de 25 minutos. Para un fragüe acelerado usar menores cantidades
          de agua, de esta manera se alcanza mayor resistencia final. El espesor
          mínimo del molde para una placa es de 10mm. Menores espesores no se
          recomiendan. No aplicar a temperaturas inferiores a 20ºC.
        </article>
      </div>
    </>
  );
};

export default YesoConstruccion;
