import whatsappLogo from '../img/whatsapp-logo-png.png'
//import "../css/styles.css";


const WhatsappContact = () => {
  const handleWhatsappClick = () => {
    const phoneNumber = '3434759182'; 
    const message = 'Hola, mi nombre es ';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className='fixed inset-x-0 bottom-0 bg-gray-900 text-white text-center py-2 flex justify-end'>
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