import '../styles.css'; // Importamos un archivo CSS para los estilos
import evhidroponia from '../img/EV-hidroponia-round.png' // Importa tu imagen aquí

const Hidroponia = () =>{

    return (<>
    <img src={evhidroponia} alt="ev hidroponia" className="evHidroponia" />

    <article>
    ¿Qué es la Hidroponia?
    La hidroponía es una técnica de cultivo en la que no se utiliza suelo, y los nutrientes
    que necesita la planta para crecer son provistos a través del agua.
    </article>

<div className='video-hidroponia'>
    <h4>Video del prototipo hidropónico NFT (Nutrient Film Technique) con hortalizas de hoja.</h4>
    <video width="250" height="200" controls autoplay onended="this.load()">
        <source src="./video/VID-20220506-WA0025.mp4" type="video/mp4" />
    </video>
</div>


</> );
};
export default Hidroponia