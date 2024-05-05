import React from 'react';
import emailjs from '@emailjs/browser';
import '../styles.css'; // Importamos un archivo CSS para los estilos

const Contacto = () => {

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_7c2gcp4','template_tzdmmf5',event.target,'NHQruOI3BzUISlenQ')
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }

  return (
    <div className='flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-600'>
      <h1 className='text-orange-500 text-5xl font-semibold font-shadows'>Contacto (Contact Me)</h1>
      <form className='w-80 border-4 border-white rounded-lg shadow-lg bg-gradient-to-br from-gray-800 to-gray-600 bg-opacity-80 p-4 flex flex-col items-center' onSubmit={sendEmail}>
        <label className='text-blue-300 text-xl font-bold mb-2'>Nombre (Name)</label>
        <input type="text" name='user_name' className='w-full text-white bg-transparent rounded-full px-4 py-2 mb-4' />
        <hr className='w-full' />

        <label className='text-blue-300 text-xl font-bold mb-2'>Correo electrónico (Email)</label>
        <input type="email" name='user_email' className='w-full text-white bg-transparent rounded-full px-4 py-2 mb-4' />
        <hr className='w-full' />

        <label className='text-blue-300 text-xl font-bold mb-2'>Mensaje (Message)</label>
        <textarea name="user_message" id="" cols="30" rows="10" className='w-full bg-gray-400 rounded-lg px-4 py-2 mb-4'></textarea>
        <hr className='w-full' />
        <button className='w-32 rounded-full text-xl text-green-500 bg-green-300 hover:bg-green-600 hover:text-white transition duration-300'>Enviar (Send)</button>
      </form>
    </div>
  )
}
export default Contacto

