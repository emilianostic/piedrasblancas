import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import evhidroponia from '../img/EV-hidroponia-round.png';
import video from '../video/videoHidrop.mp4';

const Hidroponia = () => {
  const [nombreValido, setNombreValido] = useState(true);
  const [emailValido, setEmailValido] = useState(true);

  const sendEmail = (event) => {
    event.preventDefault();

    const nombre = event.target.user_name.value;
    const email = event.target.user_email.value;

    if (!nombre) {
      setNombreValido(false);
      return;
    } else {
      setNombreValido(true);
    }

    if (!email) {
      setEmailValido(false);
      return;
    } else {
      setEmailValido(true);
    }

    emailjs.sendForm('service_7c2gcp4', 'template_tzdmmf5', event.target, 'NHQruOI3BzUISlenQ')
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

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

      <div className='flex flex-col items-center min-h-screen bg-white'>
        <h1 className='text-white text-xl font-semibold font-shadows'>Contactémonos</h1>
        <form className='w-180 border-4 border-white rounded-lg shadow-lg bg-gray-800 text-white bg-opacity-80 p-4 flex flex-col items-center' onSubmit={sendEmail}>
          <label className='text-white text-xl font-bold mb-2'>Nombre</label>
          <input type="text" name='user_name' className={`w-full text-white bg-transparent rounded-full px-4 py-2 mb-4 ${nombreValido ? '' : 'border-red-500'}`} placeholder='Juan Pérez'/>
          {!nombreValido && <span className="text-red-500 text-sm">Debés ingresar tu nombre</span>}
          <hr className='w-full' />

          <label className='text-white text-xl font-bold mb-2'>Correo electrónico</label>
          <input type="email" name='user_email' className={`w-full text-white bg-transparent rounded-full px-4 py-2 mb-4 ${emailValido ? '' : 'border-red-500'}`} placeholder='usuario@email.com'/>
          {!emailValido && <span className="text-red-500 text-sm">Debes ingresar un e-mail válido</span>}
          <hr className='w-full' />

          <label className='text-white text-xl font-bold mb-2'>Instagram</label>
          <input type="text" name='instagram' className='w-full text-white bg-transparent rounded-full px-4 py-2 mb-4' placeholder='@usuario'/>
          <hr className='w-full' />

          <label className='text-white text-xl font-bold mb-2'>LinkedIn</label>
          <input type="text" name='linkedin' className='w-full text-white bg-transparent rounded-full px-4 py-2 mb-4' placeholder='@usuario'/>
          <hr className='w-full' />

          <label className='text-white text-xl font-bold mb-2'>Mensaje</label>
          <textarea name="user_message" cols="30" rows="4" className='w-full bg-gray-400 rounded-lg px-4 py-2 mb-4' placeholder='...'></textarea>
          <hr className='w-full' />

          {/* Nuevos campos agregados */}
          <label className='text-white text-xl font-bold mb-2'>¿Tiene espacio verde?</label>
          <select name='espacio_verde' className='w-full text-white bg-transparent rounded-full px-4 py-2 mb-4'>
            <option value='si'>Sí</option>
            <option value='no'>No</option>
          </select>
          <hr className='w-full' />

          <label className='text-white text-xl font-bold mb-2'>¿Tiene espacio con luz pero sin verde?</label>
          <select name='espacio_luz' className='w-full text-white bg-transparent rounded-full px-4 py-2 mb-4'>
            <option value='si'>Sí</option>
            <option value='no'>No</option>
          </select>
          <hr className='w-full' />

          <label className='text-white text-xl font-bold mb-2'>¿Qué superficie aproximada tiene?</label>
          <input type="text" name='superficie' className='w-full text-white bg-transparent rounded-full px-4 py-2 mb-4' placeholder='...'/>
          <hr className='w-full' />

          <label className='text-white text-xl font-bold mb-2'>¿Quiere producir alimentos?</label>
          <select name='producir_alimentos' className='w-full text-white bg-transparent rounded-full px-4 py-2 mb-4'>
            <option value='si'>Sí</option>
            <option value='no'>No</option>
          </select>
          <hr className='w-full' />

          <label className='text-white text-xl font-bold mb-2'>¿Cuánto tiempo piensa dedicarle al huerto urbano?</label>
          <select name='tiempo_dedicado' className='w-full text-white bg-transparent rounded-full px-4 py-2 mb-4'>
            <option value='1'>1 hora por día</option>
            <option value='2'>2 horas por día</option>
            <option value='3'>3 horas por día</option>
            <option value='mas'>Más de 3 horas por día</option>
          </select>
          <hr className='w-full' />

          <button className='w-32 rounded-full text-xl text-black bg-gray-300 hover:bg-gray-400 hover:text-gray-800 transition duration-300'>Enviar</button>
        </form>
      </div>
    </>
  );
};

export default Hidroponia;
