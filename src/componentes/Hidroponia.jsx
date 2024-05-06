import evhidroponia from '../img/EV-hidroponia-round.png'; // Importa tu imagen aquí
import video from '../video/videoHidrop.mp4';

const Hidroponia = () => {
  return (
    <>
      <img src={evhidroponia} alt="ev hidroponia" className="mx-auto w-20" />

      <article className='text-center mt-2'>
        En EV hidroponía se cultivan hortalizas de hoja como kale, rúcula, lechuga y col asiática. Además realizamos el cultivo de albahaca. La técnica utilizada es la N.F.T. o de la lámina de nutrientes (del inglés N.F.T. -Nutrient Film Technique-) en la cuál se utiliza una solución que está en un contenedor con una bomba que permite que la misma circule por los canales que sostienen a las plantas haciendo que la lámina con los nutrientes vaya tomando contacto con las raíces para luego ser recolectada para volver al recipiente y ser bombeada nuevamente.
      </article>

      <div className="flex flex-col items-center justify-center h-full">
        <h4 className="mb-4">Video del prototipo hidropónico NFT (Nutrient Film Technique) con hortalizas de hoja.</h4>

        <div className="w-full md:w-auto">
          <video className="w-full h-auto md:h-auto" controls>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default Hidroponia;
