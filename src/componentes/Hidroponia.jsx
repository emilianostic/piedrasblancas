import '../styles.css'; // Importamos un archivo CSS para los estilos

const Hidroponia = () =>{

    return (<>

<div>
    <h4>Video del prototipo hidropónico NFT con hortalizas de hoja</h4>
    <video width="250" height="200" controls autoplay onended="this.load()">
        <source src="./video/VID-20220506-WA0025.mp4" type="video/mp4" />
    </video>
</div>

</> );
};
export default Hidroponia