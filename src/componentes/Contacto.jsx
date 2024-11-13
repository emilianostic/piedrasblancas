import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const [nombreValido, setNombreValido] = useState(true);
  const [emailValido, setEmailValido] = useState(true);
  const [mensajeExito, setMensajeExito] = useState("");

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

    emailjs
      .sendForm(
        "service_7c2gcp4",
        "template_tzdmmf5",
        event.target,
        "NHQruOI3BzUISlenQ"
      )
      .then((response) => {
        console.log(response);
        setMensajeExito("Formulario enviado.");
        event.target.reset(); // Reiniciar el formulario
      })
      .catch((error) => {
        console.log(error);
        setMensajeExito("Error al enviar el formulario.");
      });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-black p-5 mb-10">
      <h1 className="text-white text-xl font-semibold font-shadows">
        Contactémonos
      </h1>
      <form
        className="w-180 border-4 border-white rounded-lg shadow-lg bg-gray-800 text-white bg-opacity-80 p-4 flex flex-col items-center"
        onSubmit={sendEmail}
      >
        <label className="text-white text-xl font-bold mb-2">Nombre</label>
        <input
          type="text"
          name="user_name"
          className={`w-full text-white bg-transparent rounded-full px-4 py-2 mb-4 ${
            nombreValido ? "" : "border-red-500"
          }`}
          placeholder="Juan Pérez"
        />
        {!nombreValido && (
          <span className="text-red-500 text-sm">Debés ingresar tu nombre</span>
        )}
        <hr className="w-full" />

        <label className="text-white text-xl font-bold mb-2">
          Correo electrónico
        </label>
        <input
          type="email"
          name="user_email"
          className={`w-full text-white bg-transparent rounded-full px-4 py-2 mb-4 ${
            emailValido ? "" : "border-red-500"
          }`}
          placeholder="usuario@email.com"
        />
        {!emailValido && (
          <span className="text-red-500 text-sm">
            Debes ingresar un e-mail válido
          </span>
        )}
        <hr className="w-full" />

        <label className="text-white text-xl font-bold mb-2">Instagram</label>
        <input
          type="text"
          name="instagram"
          className="w-full text-white bg-transparent rounded-full px-4 py-2 mb-4"
          placeholder="@usuario"
        />
        <hr className="w-full" />

        <label className="text-white text-xl font-bold mb-2">LinkedIn</label>
        <input
          type="text"
          name="linkedin"
          className="w-full text-white bg-transparent rounded-full px-4 py-2 mb-4"
          placeholder="@usuario"
        />
        <hr className="w-full" />

        <label className="text-white text-xl font-bold mb-2">Mensaje</label>
        <textarea
          name="user_message"
          cols="30"
          rows="4"
          className="w-full bg-gray-400 rounded-lg px-4 py-2 mb-4"
          placeholder="..."
        ></textarea>
        <hr className="w-full" />

        <button className="w-32 rounded-full text-xl text-black bg-gray-300 hover:bg-gray-400 hover:text-gray-800 transition duration-300">
          Enviar
        </button>
        {mensajeExito && (
          <span className="text-white text-sm mt-4">{mensajeExito}</span>
        )}
      </form>
    </div>
  );
};

export default Contacto;
