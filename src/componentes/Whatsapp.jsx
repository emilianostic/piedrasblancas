import whatsappLogo from '../img/logo-whatsapp.jpg'
import "../css/styles.css";


const WhatsappContact = () => {
  const handleWhatsappClick = () => {
    const phoneNumber = '123456789'; // Reemplaza con tu número de teléfono
    const message = 'Hola, quiero contactarte.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className='footer'>
      <img
        src={whatsappLogo}
        alt="WhatsApp"
        onClick={handleWhatsappClick}
        className="w-10 h-10 cursor-pointer"
      />
    </div>
  );
};

export default WhatsappContact;