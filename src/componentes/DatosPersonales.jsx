import React from "react";
import "../css/styles.css";
const DatosPersonales = () => {
    return (
<>
<header className="l-header" id="header">
            <nav className="nav bd-container">
                <a href="#" className="nav_logo">Emiliano Velázquez</a>
                <div className="nav_menu" id="nav-menu">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <a href="#home" className="nav_link active-link">
                                <i className='bx bx-home nav_icon'></i>Home
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#profile" className="nav_link">
                                <i className='bx bx-user nav_icon'></i>Perfil
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#education" className="nav_link">
                                <i className='bx bx-book nav_icon'></i>Educación
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#skills" className="nav_link">
                                <i className='bx bx-receipt nav_icon'></i>Habilidades
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#experience" className="nav_link">
                                <i className='bx bx-briefcase-alt nav_icon'></i>Experiencia
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#certificate" className="nav_link">
                                <i className='bx bx-award nav_icon'></i>Certificados
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#references" className="nav_link">
                                <i className='bx bx-link-external nav_icon'></i>Referencias
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="nav_toggle" id="nav-toggle">
                    <i className='bx bx-grid-alt'></i>
                </div>
            </nav>
        </header> 

        <main className="l-main bd-container">
            
            <div className="resume" id="area-cv">
                <div className="resume__left">
                   
                    <section className="home" id="home">
                        <div className="home_containter section bd-grid">
                            <div className="home_data bd-grid">
                                <img alt="" className="home_img"/>
                                <h1 className="home_title"><b>EMILIANO VELÁZQUEZ</b></h1>
                                <h3 className="home_profession">Estudiante de Programación - Ing. Agrónomo</h3>
                                
                                <div>
                                    <a download="" href="assets/pdf/IngAgrEspVelazquezE.pdf" className="home_button-movil">Download</a>
                                </div>
                            </div>
                            <div className="home_address bd-grid">
                                <span className="home_information">
                                    <i className="bx bx-map"> &nbsp; </i> Paraná, Entre Ríos 
                                </span>
                                <span className="home_information">
                                    <i className="bx bx-envelope"> &nbsp; </i> emilianostic@gmail.com
                                </span>
                                <span className="home_information">
                                    <i className="bx bx-phone"> &nbsp; </i> (343) 4759182
                                </span>
                            </div>
                        </div>
                        
                        <i className="bx bx-moon change-theme" title="Theme" id="theme-button"></i>
                        <i className="bx bx-download generate-pdf" title="Generate PDF" id="resume-button"></i>
                    </section>          
                    
                    <section className="social section">
                        <h2 className="section-title">SOCIAL</h2>
                        <div className="social_container bd-grid">
                            <a href="https://www.linkedin.com/feed/?trk=nav_back_to_linkedin" target="_blank" className="social_link">
                                <i className="bx bxl-linkedin-square social_icon"></i> @EmilianoVelazquez81
                            </a>
                            <a href="https://github.com/emilianostic" target="_blank" className="social_link">
                                <i className="bx bxl-github social_icon"></i> @emilianostic
                            </a>
                            <a href="https://www.instagram.com/ev.hidroponia/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" className="social_link">
                                <i className="bx bxl-instagram social_icon"></i> @ev.hidroponia
                            </a>
                        </div>
                    </section>
                 
                    <section className="profile section" id="profile">
                        <h2 className="section-title">Perfil</h2>
                        <p className="profile_description">
                    
                            Soy una persona muy responsable durante las horas de trabajo asignado por la empresa. Orientado a las objetivos de la misma, enfocado y atento a todos los detalles. Tengo una larga experiencia y logros en este campo. 
                        </p>
                    </section>
                    
                 
                    <section className="education section" id="education">
                        <h2 className="section-title">Educación</h2>
                        <div className="education_container bd-grid">
                            <div className="education_content">
                                <div className="education_time">
                                    <span className="education_rounder"></span>
                                    <span className="education_line"></span>
                                </div>
                                <div className="education_data bd-grid">
                                    <h3 className="education_title">Ingeniría Agronómica</h3>
                                    <span className="education_studies">Universidad Nacional de Entre Ríos</span>
        
                                </div>
                            </div>
                            <div className="education_content">
                                <div className="education_time">
                                    <span className="education_rounder"></span>
                                    <span className="education_line"></span>
                                </div>
                                <div className="education_data bd-grid">
                                    <h3 className="education_title">Especialidad en Cultivos Intensivos</h3>
                                    <span className="education_studies">Universidad Nacional del Litoral</span>
                                   
                                </div>
                            </div>
                            <div className="education_content">
                                <div className="education_time">
                                    <span className="education_rounder"></span>
                                    <span className="education_line"></span>
                                </div>
                                <div className="education_data bd-grid">
                                    <h3 className="education_title">Profesorado Univerditario - Ciclo de Complementación Curricular</h3>
                                    <span className="education_studies">Univerdidad Autónoma de Entre Ríos</span>
                                </div>
                            </div>
                        </div>
                    </section>
                   
                    <section className="skills section" id="skills">
                        <h2 className="section-title">Habilidades</h2>
                        <div className="skills_content bd-grid">
                            <ul className="skills_data">
                                <li className="skills_name">
                                    <span className="skills_circle"></span> HTML
                                </li>
                                <li className="skills_name">
                                    <span className="skills_circle"></span> CSS
                                </li>
                                <li className="skills_name">
                                    <span className="skills_circle"></span> JAVASCRIPT
                                </li>
                                <li className="skills_name">
                                    <span className="skills_circle"></span> HIDROPONIA
                                </li>
                                <li className="skills_name">
                                    <span className="skills_circle"></span>CULTIVOS INTENSIVOS
                                </li>
                            </ul>
                            
                        </div>
                    </section>
                </div>
                <div className="resume__right">
                    
                    <section className="experience section" id="experience">
                        <h2 className="section-title">Experiencia en Programación</h2>
                        <div className="experience_container bd-grid">
                            <div className="experience_content">
                                <div className="experience_time">
                                    <span className="experience_rounder"></span>
                                    <span className="experience_line"></span>
                                </div>
                                <div className="experience_data bd-grid">
                                    <h3 className="experience_title"> FRONTEND WEB DEVELOPER</h3>
                                    <span className="experience_company">April 2022 - actualidad </span>
                                    <p className="experience_description">
                                    Curso Universidad Desarrollo Web - FrontEnd. HTML, CSS y JavaScript con las últimas tecnologías y herramientas para dominar y crear aplicaciones Web modernas que las empresas están buscando.
                                    </p>
                                </div>
                            </div>
                            <div className="experience_content">
                                <div className="experience_time">
                                    <span className="experience_rounder"></span>
                                    <span className="experience_line"></span>
                                </div>
                                <div className="experience_data bd-grid">
                                    <h3 className="experience_title">REACTJS DESDE CERO PARA PRINCIPIANTES</h3>
                                    
                                    <p className="experience_description">
                                        En este curso de React estoy aprendiendo las bases necesarias de React como componentes (Components), props, estado (useState), hooks, estilos, useContext, useEffect, ademas de usar otras herramientas como create-react-app, vitejs, tailwindcss, react-icons y otras mas bibliotecas de npm (Nodejs).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section className="certificate section" id="certificate">
                        <h2 className="section-title">Certificados</h2>
                        <div className="certificate_container bd-grid">
                            <div className="certificate_content">
                                <h3 className="certificate_title">Programación Imperativa en JavaScript</h3>
                                <p className="certificate_description">
                                   Introducción a la Programación Web  front-end en la Facultad de Matemática, Astronomía, Dídica y Computación - UNC en el marco del Argentina Programa 4.0. Julio de 2023.
                                </p>
                            </div>
                            <div className="certificate_content">
                                <h3 className="certificate_title">Introducción a la programación del Instituto Nacional de Tecnología Industrial (INTI)</h3>
                                <p className="certificate_description">
                                    Primera etapa del curso #SeProgramar del trayecto formativo INTI en el marco del Argentina Programa 4.0. Abril 2023
                                </p>
                            </div>
                            
                            <div className="certificate_content">
                                <h3 className="certificate_title">Idioma Extranjero - Inglés</h3>
                                <p className="certificate_description">
                                    Facultad de Ciencias Económicas de la Universidad Nacional de Entre Ríos. Nivel 4 em idioma inglés. Profesora Vanesa Oviedo. Diciembre 2016
                                </p>
                            </div>
                        </div>
                    </section>
                 
                    <section className="references section" id="references">
                        <h2 className="section-title">Fake Referencias</h2>
                        <div className="references_container bd-grid">
                            <div className="references_content bd-grid">
                                <span className="references_subtitle">CEO IA JH bots</span>
                                <h3 className="references_title">Dr. Andy Bokó</h3>
                                <ul className="references_contact">
                                    <li>Tel:  +54-11-9296314</li>
                                    <li>Email:  ceojhbots@yahoo.com</li>
                                </ul>
                            </div>
                            <div className="references_content bd-grid">
                                <span className="references_subtitle">Profesor</span>
                                <h3 className="references_title">Dr. Hammiro Abdul</h3>
                                <ul className="references_contact">
                                    <li>Tel:  11-9222258</li>
                                    <li>Email:  abdulhammiro@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    
                    <section className="languages section">
                        <h2 className="section-title">Idiomas</h2>
                        <div className="languages_container">
                            <ul className="languages_content bd-grid">
                                <li className="languages_name">
                                    <span className="languages_circle"></span> Castellano
                                </li>
                                <li className="languages_name">
                                    <span className="languages_circle"></span> Inglés
                                </li>
                            </ul>
                        </div>
                    </section>
                    
                 
                    <section className="interests section">
                        <h2 className="section-title">Intereses</h2>
                        <div className="interests_container bd-grid">
                            <div className="interests_content">
                                <i className='bx bx-code-alt interests_icon'></i>
                                <span className="interests_name">Progamar</span>
                            </div>
                            <div className="interests_content">
                                <i className='bx bxs-book interests_icon' ></i>
                                <span className="interests_name">Libros</span>
                            </div>
                            <div className="interests_content">
                                <i className="bx bxs-plane-alt interests_icon"></i>
                                <span className="interests_name">Viajar</span>
                            </div>
                            <div className="interests_content">
                                <i className="bx bxs-ball interests_icon "></i>
                                <span className="interests_name">Deportes</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>        
        </main> 

            <a href="#" className="scrolltop" id="scrolltop">
                <i className="bx bx-up-arrow-alt scrolltop_icon"></i>
            </a>
</>
    )
}
export default DatosPersonales 