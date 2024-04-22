import React from "react";
import "../css/styles.css";
const DatosPersonales = () => {
    return (
<>
<header class="l-header" id="header">
            <nav class="nav bd-container">
                <a href="#" class="nav_logo">Emiliano Velázquez</a>
                <div class="nav_menu" id="nav-menu">
                    <ul class="nav_list">
                        <li class="nav_item">
                            <a href="#home" class="nav_link active-link">
                                <i class='bx bx-home nav_icon'></i>Home
                            </a>
                        </li>
                        <li class="nav_item">
                            <a href="#profile" class="nav_link">
                                <i class='bx bx-user nav_icon'></i>Perfil
                            </a>
                        </li>
                        <li class="nav_item">
                            <a href="#education" class="nav_link">
                                <i class='bx bx-book nav_icon'></i>Educación
                            </a>
                        </li>
                        <li class="nav_item">
                            <a href="#skills" class="nav_link">
                                <i class='bx bx-receipt nav_icon'></i>Habilidades
                            </a>
                        </li>
                        <li class="nav_item">
                            <a href="#experience" class="nav_link">
                                <i class='bx bx-briefcase-alt nav_icon'></i>Experiencia
                            </a>
                        </li>
                        <li class="nav_item">
                            <a href="#certificate" class="nav_link">
                                <i class='bx bx-award nav_icon'></i>Certificados
                            </a>
                        </li>
                        <li class="nav_item">
                            <a href="#references" class="nav_link">
                                <i class='bx bx-link-external nav_icon'></i>Referencias
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="nav_toggle" id="nav-toggle">
                    <i class='bx bx-grid-alt'></i>
                </div>
            </nav>
        </header>

        <main class="l-main bd-container">
            
            <div class="resume" id="area-cv">
                <div class="resume__left">
                   
                    <section class="home" id="home">
                        <div class="home_containter section bd-grid">
                            <div class="home_data bd-grid">
                                <img alt="" class="home_img"/>
                                <h1 class="home_title">EMILIANO <b>VELÁZQUEZ</b></h1>
                                <h3 class="home_profession">Estudiante de Programación - Ing. Agrónomo</h3>
                                
                                <div>
                                    <a download="" href="assets/pdf/IngAgrEspVelazquezE.pdf" class="home_button-movil">Download</a>
                                </div>
                            </div>
                            <div class="home_address bd-grid">
                                <span class="home_information">
                                    <i class="bx bx-map"> &nbsp; </i> Paraná, Entre Ríos 
                                </span>
                                <span class="home_information">
                                    <i class="bx bx-envelope"> &nbsp; </i> emilianostic@gmail.com
                                </span>
                                <span class="home_information">
                                    <i class="bx bx-phone"> &nbsp; </i> (343) 4759182
                                </span>
                            </div>
                        </div>
                        
                        <i class="bx bx-moon change-theme" title="Theme" id="theme-button"></i>
                        <i class="bx bx-download generate-pdf" title="Generate PDF" id="resume-button"></i>
                    </section>          
                    
                    <section class="social section">
                        <h2 class="section-title">SOCIAL</h2>
                        <div class="social_container bd-grid">
                            <a href="https://www.linkedin.com/feed/?trk=nav_back_to_linkedin" target="_blank" class="social_link">
                                <i class="bx bxl-linkedin-square social_icon"></i> @EmilianoVelazquez81
                            </a>
                            <a href="https://github.com/emilianostic" target="_blank" class="social_link">
                                <i class="bx bxl-github social_icon"></i> @emilianostic
                            </a>
                            <a href="https://www.instagram.com/ev.hidroponia/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" class="social_link">
                                <i class="bx bxl-instagram social_icon"></i> @ev.hidroponia
                            </a>
                        </div>
                    </section>
                 
                    <section class="profile section" id="profile">
                        <h2 class="section-title">Perfil</h2>
                        <p class="profile_description">
                    
                            Soy una persona muy responsable durante las horas de trabajo asignado por la empresa. Orientado a las objetivos de la misma, enfocado y atento a todos los detalles. Tengo una larga experiencia y logros en este campo. 
                        </p>
                    </section>
                    
                 
                    <section class="education section" id="education">
                        <h2 class="section-title">Educación</h2>
                        <div class="education_container bd-grid">
                            <div class="education_content">
                                <div class="education_time">
                                    <span class="education_rounder"></span>
                                    <span class="education_line"></span>
                                </div>
                                <div class="education_data bd-grid">
                                    <h3 class="education_title">Ingeniría Agronómica</h3>
                                    <span class="education_studies">Universidad Nacional de Entre Ríos</span>
        
                                </div>
                            </div>
                            <div class="education_content">
                                <div class="education_time">
                                    <span class="education_rounder"></span>
                                    <span class="education_line"></span>
                                </div>
                                <div class="education_data bd-grid">
                                    <h3 class="education_title">Especialidad en Cultivos Intensivos</h3>
                                    <span class="education_studies">Universidad Nacional del Litoral</span>
                                   
                                </div>
                            </div>
                            <div class="education_content">
                                <div class="education_time">
                                    <span class="education_rounder"></span>
                                    <span class="education_line"></span>
                                </div>
                                <div class="education_data bd-grid">
                                    <h3 class="education_title">Profesorado Univerditario - Ciclo de Complementación Curricular</h3>
                                    <span class="education_studies">Univerdidad Autónoma de Entre Ríos</span>
                                </div>
                            </div>
                        </div>
                    </section>
                   
                    <section class="skills section" id="skills">
                        <h2 class="section-title">Habilidades</h2>
                        <div class="skills_content bd-grid">
                            <ul class="skills_data">
                                <li class="skills_name">
                                    <span class="skills_circle"></span> HTML
                                </li>
                                <li class="skills_name">
                                    <span class="skills_circle"></span> CSS
                                </li>
                                <li class="skills_name">
                                    <span class="skills_circle"></span> JAVASCRIPT
                                </li>
                                <li class="skills_name">
                                    <span class="skills_circle"></span> HIDROPONIA
                                </li>
                                <li class="skills_name">
                                    <span class="skills_circle"></span>CULTIVOS INTENSIVOS
                                </li>
                            </ul>
                            
                        </div>
                    </section>
                </div>
                <div class="resume__right">
                    
                    <section class="experience section" id="experience">
                        <h2 class="section-title">Experiencia en Programación</h2>
                        <div class="experience_container bd-grid">
                            <div class="experience_content">
                                <div class="experience_time">
                                    <span class="experience_rounder"></span>
                                    <span class="experience_line"></span>
                                </div>
                                <div class="experience_data bd-grid">
                                    <h3 class="experience_title"> FRONTEND WEB DEVELOPER</h3>
                                    <span class="experience_company">April 2022 - actualidad </span>
                                    <p class="experience_description">
                                    Curso Universidad Desarrollo Web - FrontEnd. HTML, CSS y JavaScript con las últimas tecnologías y herramientas para dominar y crear aplicaciones Web modernas que las empresas están buscando.
                                    </p>
                                </div>
                            </div>
                            <div class="experience_content">
                                <div class="experience_time">
                                    <span class="experience_rounder"></span>
                                    <span class="experience_line"></span>
                                </div>
                                <div class="experience_data bd-grid">
                                    <h3 class="experience_title">REACTJS DESDE CERO PARA PRINCIPIANTES</h3>
                                    
                                    <p class="experience_description">
                                        En este curso de React estoy aprendiendo las bases necesarias de React como componentes (Components), props, estado (useState), hooks, estilos, useContext, useEffect, ademas de usar otras herramientas como create-react-app, vitejs, tailwindcss, react-icons y otras mas bibliotecas de npm (Nodejs).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section class="certificate section" id="certificate">
                        <h2 class="section-title">Certificados</h2>
                        <div class="certificate_container bd-grid">
                            <div class="certificate_content">
                                <h3 class="certificate_title">Programación Imperativa en JavaScript</h3>
                                <p class="certificate_description">
                                   Introducción a la Programación Web  front-end en la Facultad de Matemática, Astronomía, Dídica y Computación - UNC en el marco del Argentina Programa 4.0. Julio de 2023.
                                </p>
                            </div>
                            <div class="certificate_content">
                                <h3 class="certificate_title">Introducción a la programación del Instituto Nacional de Tecnología Industrial (INTI)</h3>
                                <p class="certificate_description">
                                    Primera etapa del curso #SeProgramar del trayecto formativo INTI en el marco del Argentina Programa 4.0. Abril 2023
                                </p>
                            </div>
                            
                            <div class="certificate_content">
                                <h3 class="certificate_title">Idioma Extranjero - Inglés</h3>
                                <p class="certificate_description">
                                    Facultad de Ciencias Económicas de la Universidad Nacional de Entre Ríos. Nivel 4 em idioma inglés. Profesora Vanesa Oviedo. Diciembre 2016
                                </p>
                            </div>
                        </div>
                    </section>
                 
                    <section class="references section" id="references">
                        <h2 class="section-title">Fake Referencias</h2>
                        <div class="references_container bd-grid">
                            <div class="references_content bd-grid">
                                <span class="references_subtitle">CEO IA JH bots</span>
                                <h3 class="references_title">Dr. Andy Bokó</h3>
                                <ul class="references_contact">
                                    <li>Tel:  +54-11-9296314</li>
                                    <li>Email:  ceojhbots@yahoo.com</li>
                                </ul>
                            </div>
                            <div class="references_content bd-grid">
                                <span class="references_subtitle">Profesor</span>
                                <h3 class="references_title">Dr. Hammiro Abdul</h3>
                                <ul class="references_contact">
                                    <li>Tel:  11-9222258</li>
                                    <li>Email:  abdulhammiro@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    
                    <section class="languages section">
                        <h2 class="section-title">Idiomas</h2>
                        <div class="languages_container">
                            <ul class="languages_content bd-grid">
                                <li class="languages_name">
                                    <span class="languages_circle"></span> Castellano
                                </li>
                                <li class="languages_name">
                                    <span class="languages_circle"></span> Inglés
                                </li>
                            </ul>
                        </div>
                    </section>
                    
                 
                    <section class="interests section">
                        <h2 class="section-title">Intereses</h2>
                        <div class="interests_container bd-grid">
                            <div class="interests_content">
                                <i class='bx bx-code-alt interests_icon'></i>
                                <span class="interests_name">Progamar</span>
                            </div>
                            <div class="interests_content">
                                <i class='bx bxs-book interests_icon' ></i>
                                <span class="interests_name">Libros</span>
                            </div>
                            <div class="interests_content">
                                <i class="bx bxs-plane-alt interests_icon"></i>
                                <span class="interests_name">Viajar</span>
                            </div>
                            <div class="interests_content">
                                <i class="bx bxs-ball interests_icon "></i>
                                <span class="interests_name">Deportes</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>        
        </main> 

            <a href="#" class="scrolltop" id="scrolltop">
                <i class="bx bx-up-arrow-alt scrolltop_icon"></i>
            </a>
</>
    )
}
export default DatosPersonales