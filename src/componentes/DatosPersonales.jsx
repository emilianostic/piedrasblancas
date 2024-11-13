import React from "react";

import profile2 from "../img/profile2.jpg"; // Importa tu imagen aquí

const DatosPersonales = () => {
  return (
    <>
      <header className="fixed bottom-0 w-full h-10 bg-black shadow-md">
        <nav className="flex justify-between items-center px-6 py-4 max-w-5xl mx-auto mb-10">
          <a href="#" className="font-semibold text-m text-white">
            Emiliano Velázquez
          </a>
          <div className="hidden md:flex">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#home"
                  className="flex flex-col items-center text-sm text-white hover:text-black active-link"
                >
                  <i className="bx bx-home text-xl"></i>Home
                </a>
              </li>
              <li>
                <a
                  href="#profile"
                  className="flex flex-col items-center text-sm text-white hover:text-black"
                >
                  <i className="bx bx-user text-xl"></i>Perfil
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="flex flex-col items-center text-sm text-white hover:text-black"
                >
                  <i className="bx bx-book text-xl"></i>Educación
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="flex flex-col items-center text-sm text-white hover:text-black"
                >
                  <i className="bx bx-receipt text-xl text-white"></i>
                  Habilidades
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="flex flex-col items-center text-sm text-white hover:text-black"
                >
                  <i className="bx bx-briefcase-alt text-xl"></i>Experiencia
                </a>
              </li>
              <li>
                <a
                  href="#certificate"
                  className="flex flex-col items-center text-sm text-white hover:text-black"
                >
                  <i className="bx bx-award text-xl"></i>Certificados
                </a>
              </li>
              <li>
                <a
                  href="#references"
                  className="flex flex-col items-center text-sm text-white hover:text-black"
                >
                  <i className="bx bx-link-external text-xl"></i>Referencias
                </a>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <i className="bx bx-grid-alt text-2xl"></i>
          </div>
        </nav>
      </header>

      <main className="pt-24 bg-black">
        <div className="max-w-5xl mx-auto p-6 bg-black shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <section id="home" className="text-center">
                <img
                  src={profile2}
                  alt=""
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h1 className="text-xl font-bold text-white">EMILIANO VELÁZQUEZ</h1>
                <h3 className="text-sm text-white">
                  Estudiante de desarrollo web - Ing. Agrónomo
                </h3>
                <div className="mt-4">
                  <a
                    download
                    href="assets/pdf/IngAgrEspVelazquezE.pdf"
                    className="inline-block border-2 border-gray-400 text-white py-2 px-4 rounded-full hover:bg-gray-400 hover:text-black"
                  >
                    Descargar CV
                  </a>
                </div>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-center space-x-2 text-white">
                    <i className="bx bx-map"></i>
                    <span>Paraná, Entre Ríos</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-white">
                    <i className="bx bx-envelope"></i>
                    <span>emilianostic@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-white">
                    <i className="bx bx-phone"></i>
                    <span>(343) 4759182</span>
                  </div>
                </div>
                <div className="mt-4 space-x-4">
                  <a href="#" className="text-white hover:text-black">
                    <i className="bx bxl-linkedin text-2xl"></i>
                  </a>
                  <a href="#" className="text-white hover:text-black">
                    <i className="bx bxl-github text-2xl"></i>
                  </a>
                  <a href="#" className="text-white hover:text-black">
                    <i className="bx bxl-twitter text-2xl"></i>
                  </a>
                  <a href="#" className="text-white hover:text-black">
                    <i className="bx bxl-whatsapp text-2xl"></i>
                  </a>
                </div>
                <i
                  className="bx bx-moon text-xl mt-4 cursor-pointer"
                  id="theme-button"
                ></i>
                <i
                  className="bx bx-download text-xl mt-4 cursor-pointer"
                  id="resume-button"
                ></i>
              </section>

              <section id="profile" className="mt-8">
                <h2 className="text-xl font-semibold text-center mb-4">
                  Perfil
                </h2>
                <p className="text-sm text-gray-400">
                  Soy una persona muy responsable durante las horas de trabajo
                  asignado por la empresa. Orientado a las objetivos de la
                  misma, enfocado y atento a todos los detalles. Tengo una larga
                  experiencia y logros en este campo.
                </p>
              </section>

              <section id="education" className="mt-8">
                <h2 className="text-xl font-semibold text-center mb-4 text-white">
                  Educación
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-4">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <div className="w-px h-24 bg-gray-400 mx-auto"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">
                        Ingeniería Agronómica
                      </h3>
                      <span className="text-sm text-white">
                        Universidad Nacional de Entre Ríos
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-4">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <div className="w-px h-24 bg-gray-400 mx-auto"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">
                        Especialidad en Cultivos Intensivos
                      </h3>
                      <span className="text-sm text-white">
                        Universidad Nacional del Litoral
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-4">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <div className="w-px h-24 bg-gray-400 mx-auto"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">
                        Profesorado Universitario - Ciclo de Complementación
                        Curricular
                      </h3>
                      <span className="text-sm text-white">
                        Universidad Autónoma de Entre Ríos (UADER)
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              <section id="skills" className="mt-8">
                <h2 className="text-xl font-semibold text-center mb-4 text-white ">
                  Habilidades
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-center text-white">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-2 text-white"></span>
                    HTML
                  </li>
                  <li className="flex items-center text-white">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-2 text-white"></span>
                    CSS
                  </li>
                  <li className="flex items-center text-white">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-2 text-white"></span>
                    JAVASCRIPT
                  </li>
                  <li className="flex items-center text-white">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-2 text-white"></span>
                    HIDROPONIA
                  </li>
                  <li className="flex items-center text-white">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-2 text-white"></span>
                    CULTIVOS INTENSIVOS
                  </li>
                </ul>
              </section>

              <section id="languages" className="mt-8">
                <h2 className="text-xl font-semibold text-center mb-4 text-white">
                  Idiomas
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-center text-white">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-2 text-white"></span>
                    Español - Nativo
                  </li>
                  <li className="flex items-center text-white">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-2 text-white"></span>
                    Inglés - Intermedio
                  </li>
                </ul>
              </section>

              <section id="interests" className="mt-8">
                <h2 className="text-xl font-semibold text-center mb-4 text-white">
                  Intereses
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-center text-white">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-2 text-white"></span>
                    Programación
                  </li>
                  <li className="flex items-center text-white">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-2 text-white"></span>
                    Agronomía
                  </li>
                  <li className="flex items-center text-white">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-2 text-white"></span>
                    Hidroponia
                  </li>
                  <li className="flex items-center text-white">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-2 text-white"></span>
                    Jardinería
                  </li>
                </ul>
              </section>
            </div>

            <div>
              <section id="experience" className="mt-8">
                <h2 className="text-xl font-semibold text-center mb-4 text-white">
                  Experiencia
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-4">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <div className="w-px h-24 bg-gray-400 mx-auto"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">
                        FRONTEND WEB DEVELOPER
                      </h3>
                      <span className="text-sm text-white">
                        April 2022 - actualidad
                      </span>
                      <p className="text-sm text-gray-400">
                        Curso Universidad Desarrollo Web - FrontEnd. HTML, CSS y
                        JavaScript con las últimas tecnologías y herramientas
                        para dominar y crear aplicaciones Web modernas que las
                        empresas están buscando.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-4">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <div className="w-px h-24 bg-gray-400 mx-auto"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">
                        REACTJS DESDE CERO PARA PRINCIPIANTES
                      </h3>
                      <span className="text-sm text-white">React JS</span>
                      <p className="text-sm text-gray-400">
                        En este curso de React estoy aprendiendo las bases
                        necesarias de React como componentes (Components),
                        props, estado (useState), hooks, estilos, useContext,
                        useEffect, ademas de usar otras herramientas como
                        create-react-app, vitejs, tailwindcss, react-icons y
                        otras mas bibliotecas de npm (Nodejs).
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="certificate" className="mt-8">
                <h2 className="text-xl font-semibold text-center mb-4 text-white">
                  Certificados
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-4">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <div className="w-px h-24 bg-gray-400 mx-auto"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">
                        Programación Imperativa en JavaScript
                      </h3>
                      <span className="text-sm text-white">
                        Argentina Programa #SéProgramar
                      </span>
                      <p className="text-sm text-gray-400">
                        Introducción a la Programación Web front-end en la
                        Facultad de Matemática, Astronomía, Dídica y Computación
                        - UNC en el marco del Argentina Programa 4.0. Julio de
                        2023.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-4">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <div className="w-px h-24 bg-gray-400 mx-auto"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">
                        Introducción a la programación del Instituto Nacional de
                        Tecnología Industrial (INTI)
                      </h3>
                      <span className="text-sm text-white">
                        Argentina Programa
                      </span>
                      <p className="text-sm text-gray-400">
                        Primera etapa del curso #SeProgramar del trayecto
                        formativo INTI en el marco del Argentina Programa 4.0.
                        Abril 2023.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-4">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <div className="w-px h-24 bg-gray-400 mx-auto"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">
                        Idioma Extranjero - Inglés
                      </h3>

                      <p className="text-sm text-gray-400">
                        Facultad de Ciencias Económicas de la Universidad
                        Nacional de Entre Ríos. Nivel 4 em idioma inglés.
                        Profesora Vanesa Oviedo. Diciembre 2016
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="references" className="mt-8">
                <h2 className="text-xl font-semibold text-center mb-4 text-white">
                  Referencias
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-4">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <div className="w-px h-24 bg-gray-400 mx-auto"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">
                        John Doe
                      </h3>
                      <span className="text-sm text-white">
                        CEO, Example Corp
                      </span>
                      <p className="text-sm text-gray-400">
                        "Emiliano es un trabajador dedicado y eficiente. Siempre
                        cumple con sus responsabilidades y supera las
                        expectativas."
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-4">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <div className="w-px h-24 bg-gray-400 mx-auto"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">
                        Jane Smith
                      </h3>
                      <span className="text-sm text-white">
                        Manager, Tech Solutions
                      </span>
                      <p className="text-sm text-gray-400">
                        "He trabajado con Emiliano en varios proyectos y siempre
                        ha demostrado una gran capacidad técnica y
                        profesionalismo."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="social" className="mt-8">
                <h2 className="text-xl font-semibold text-center mb-4 text-white">
                  Social
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-4">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                    </div>
                    <div>
                      <a
                        href="https://www.linkedin.com/feed/?trk=nav_back_to_linkedin"
                        target="_blank"
                        className="social_link text-white"
                      >
                        <i className="bx bxl-linkedin-square social_icon "></i>{" "}
                        @EmilianoVelazquez81
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-4">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                    </div>
                    <div>
                      <a
                        href="https://www.instagram.com/ev.hidroponia/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                        target="_blank"
                        className="social_link text-white"
                      >
                        <i className="bx bxl-instagram social_icon"></i>{" "}
                        @ev.hidroponia
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-4">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                    </div>
                    <div>
                      <a
                        href="https://github.com/emilianostic"
                        target="_blank"
                        className="social_link text-white"
                      >
                        <i className="bx bxl-github social_icon"></i>{" "}
                        @emilianostic
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DatosPersonales;
