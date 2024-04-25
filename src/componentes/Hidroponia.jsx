import '../styles.css'; // Importamos un archivo CSS para los estilos
import evhidroponia from '../img/EV-hidroponia-round.png' // Importa tu imagen aquí
import video from '../video/videoHidrop.mp4'
const Hidroponia = () =>{

    return (<>
    <img src={evhidroponia} alt="ev hidroponia" className="evHidroponia" />

    <article className='hidroponia'>
    ¿Qué es la Hidroponia?
    La hidroponía es una técnica de cultivo en la que no se utiliza suelo, y los nutrientes
    que necesita la planta para crecer son provistos a través del agua.
    </article>

<div className='video-hidroponia'>
    <h4>Video del prototipo hidropónico NFT (Nutrient Film Technique) con hortalizas de hoja.</h4>
    <video width="500" height="400" controls>
          <source src={video} type="video/mp4" />
        </video>
</div>


</> );
};
export default Hidroponia