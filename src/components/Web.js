import React, { useState, useEffect } from "react"
import './assets/css/styles.css'
import './assets/vendors/themify-icons/css/themify-icons.css'
import cv from './assets/doc/CV_AvalosMedinaAlanJordi.pdf'
import autor from './assets/imgs/JordiC.jpg'
import Portafolio from "./Portafolio"
import elon from './assets/imgs/elon.jpg'
import face from './assets/imgs/faces.jpg'
import smile from './assets/imgs/smile.jpg'
import web from './assets/imgs/web.jpg'
import presupuesto from './assets/imgs/presupuesto.jpg'
import angular from './assets/imgs/angular.jpg'
import juego from './assets/imgs/juego.jpg'
import base from './assets/imgs/base.jpg'
import Contact from "./Contact"

const Web = () => {
    
    const [classes, setClasses] = useState('python')

    const[datosImp, setDatosImp] = useState([])


    useEffect(() =>{
        const datos = [
            {
                "id" : 1,
                "titulo": 'Reconocedor facial de famosos',
                "descripcion" : 'Programa hecho con OpenCV que distingue las caras de famosos seleccionados.',
                "clase" : 'python',
                "imagen" : elon,
                "referencia" : 'https://github.com/A-J-A-M/Face-Detect'
            },
            {
                "id" : 2,
                "titulo": 'Detector de caras',
                "descripcion" : 'Usando la librería OpenCV, se logra detectar caras humanas con una precisión alrededor del 85%.',
                "clase" : 'python',
                "imagen" : face,
                "referencia" : 'https://github.com/A-J-A-M/Face-Detect'
            },
            {
                "id" : 3,
                "titulo": 'Detector de sonrisas',
                "descripcion" : 'Usando la librería OpenCV, se logra detectar cuando una persona está sonriendo con una precisión de alrededor del 90%.',
                "clase" : 'python',
                "imagen" : smile,
                "referencia" : 'https://github.com/A-J-A-M/FaceSmile'
            },
            {
                "id" : 4,
                "titulo": 'Creación de página web personal',
                "descripcion" : 'Implementación de página web estática a base de plantillas de HTML y CSS, y el uso de JavaScript con React.',
                "clase" : 'web',
                "imagen" : web,
                "referencia" : 'https://github.com/A-J-A-M/WebPage' 
            },
            {
                "id" : 5,
                "titulo": 'Página web de presupuesto',
                "descripcion" : 'Página hecha con JavaScript, HTML y CSS que a base de los ingresos y egresos calcula si tu saldo es en contra o a favor.',
                "clase" : 'web',
                "imagen" : presupuesto,
                "referencia" : 'https://github.com/A-J-A-M/Budget'
            },
            {
                "id" : 6,
                "titulo": 'Calculadora de suma',
                "descripcion" : 'Página hecha con Angular que consiste en darte el resultado de la suma de dos números.',
                "clase" : 'web',
                "imagen" : angular,
                "referencia" : 'https://github.com/A-J-A-M/Calculator'
            },
            {
                "id" : 7,
                "titulo": 'Programación de videojuego',
                "descripcion" : 'Implementación de un videojuego funcional en Java. Todo hecho desde 0.',
                "clase" : 'java',
                "imagen" : juego,
                "referencia" : 'https://github.com/A-J-A-M/VideoGame'
            },
            {
                "id" : 8,
                "titulo": 'Base de Datos de escuela primaria',
                "descripcion" : 'Creación, despliegue y conectado de simulación de base de datos (Oracle SQL) de escuela primaria con interfaz gráfica.',
                "clase" : 'java',
                "imagen" : base,
                "referencia" : 'https://github.com/A-J-A-M/DataBase'
            },
        ]
        setDatosImp(datos.filter(dato => dato.clase.includes(classes)))
    }, [classes])

    const shuffle = (id) =>{
        document.getElementById(id).className = 'active';
        switch (id) {
            case 'pythonfilter':
                setClasses('python');
                document.getElementById('javafilter').className = '';
                document.getElementById('webfilter').className = '';
                break;
            case 'javafilter':
                setClasses('java');
                document.getElementById('pythonfilter').className = '';
                document.getElementById('webfilter').className = '';
                break;
            case 'webfilter':
                setClasses('web');
                document.getElementById('pythonfilter').className = '';
                document.getElementById('javafilter').className = '';
                break;
            default:
                break;
        }
    }
    return (
    <React.Fragment>
      <div data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
        <a href="#home" className="btn btn-primary btn-component" data-spy="affix" data-offset-top="600"><i className="ti-shift-left-alt"></i>Regresa a inicio</a>
        <header className="header">
            <div className="container">
                <ul className="social-icons pt-3">
                    <li className="social-item"><a className="social-link text-light" href="https://www.linkedin.com/in/alan-jordi-avalos-medina-9a6478240/" target="_blank" rel="noreferrer"> <i className="ti-linkedin" aria-hidden="true"></i></a></li>
                    <li className="social-item"><a className="social-link text-light" href="https://github.com/A-J-A-M" target="_blank" rel="noreferrer"> <i className="ti-github" aria-hidden="true"></i></a></li>
                </ul>  
                <div className="header-content">
                    <h4 className="header-subtitle" >Hola, mi nombre es</h4>
                    <h1 className="header-title">Alan Jordi Avalos Medina</h1>
                    <h6 className="header-mono" >Estudiante en ingeniería en sistemas</h6>
                    <a href={cv} download="CV_AvalosMedinaAlanJordi.pdf" className="">
                        <button className="btn btn-primary btn-rounded"><i className="ti-download"> Descargar CV</i></button>
                    </a>
                    
                </div>
            </div>
        </header>
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top="510">
            <div className="container">
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a href="#home" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link">Acerca de</a>
                        </li>
                        <li className="nav-item">
                            <a href="#resume" className="nav-link">Currículum</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav brand">
                        <img src={autor} alt="" className="brand-img"/>
                        <li className="brand-txt">
                            <h5 className="brand-title">Jordi</h5>
                            <div className="brand-subtitle">Estudiante de ingeniería en sistemas</div>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="#otros" className="nav-link">Otros</a>
                        </li>
                        <li className="nav-item">
                            <a href="#portfolio" className="nav-link">Portafolio</a>
                        </li>
                        <li className="nav-item last-item">
                            <a href="#contact" className="nav-link">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container-fluid">
            <div id="about" className="row about-section">
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">¿Quién soy?</h3>
                    <span className="line mb-5"></span>
                    <h5 className="mb-3">Estudiante de Ingeniería en Sistemas Computacionales Estu</h5>
                    <p className="mt-20">Tengo una gran pasión por programar. En busca de nuevos conocimientos y experiencias, al mismo tiempo que aporto valor a mi entorno labora</p>
                    <a href={cv} download="CV_AvalosMedinaAlanJordi.pdf" className="">
                        <button className="btn btn-outline-danger"><i className="icon-down-circled2 "></i>Descargar CV</button>
                    </a>
                    
                </div>
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">Información personal</h3>
                    <span className="line mb-5"></span>
                    <ul className="mt40 info list-unstyled">
                        <li><span>Fecha de nacimiento:</span> 23/04/2001</li>
                        <li><span>Email:</span><a href="mailto:jordiavalos3@gmail.com">jordiavalos3@gmail.com</a></li>
                        <li><span>Celular:</span> +52 (722) 14-68-376</li>
                    </ul>
                    <ul className="social-icons pt-3">
                        <li className="social-item"><a className="social-link" href="https://www.linkedin.com/in/alan-jordi-avalos-medina-9a6478240/" target="_blank" rel="noreferrer"> <i className="ti-linkedin" aria-hidden="true"></i></a></li>
                        <li className="social-item"><a className="social-link" href="https://github.com/A-J-A-M" target="_blank" rel="noreferrer"> <i className="ti-github" aria-hidden="true"></i></a></li>
                    </ul>  
                </div>
                <div className="col-lg-4 about-card">
                    <h3 className="font-weight-light">Intereses</h3>
                    <span className="line mb-5"></span>
                    <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-desktop icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Ciencia de datos</h6>
                            <p className="subtitle"> Gran interes en machine learning, deep learning e inteligencia artificial en general.</p>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-harddrives icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Desarrollo de páginas web</h6>
                            <p className="subtitle">Creación e implementación full stack de páginas web.</p>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 text-danger pt-1"><i className="ti-server icon-lg"></i></div>
                        <div className="col-10 ml-auto mr-3">
                            <h6>Administración de Base de Datos</h6>
                            <p className="subtitle">Manejo, control y administración de Bases de Datos Estructuradas.</p>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="section" id="resume">
            <div className="container">
                <h2 className="mb-5"><span className="text-danger">Mi</span> Currículum</h2>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                        <div className="card-header">
                                <div className="pull-left">
                                    <h4 className="mt-2">Lenguajes de programación</h4>
                                    <span className="line"></span>  
                                </div>
                            </div>
                            <div className="card-body pb-2">
                            <h6>Python</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '93%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>JavaScript</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '82%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>Java</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '70%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>HTML5</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '65%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>SQL</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '65%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>TypeScript</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '60%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>C++</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '45%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>C#</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '40%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>Kotlin</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '25%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                        <div className="card-header">
                                <div className="mt-2">
                                    <h4>Educación</h4>
                                    <span className="line"></span>  
                                </div>
                            </div>
                            <div className="card-body">
                                <h6 className="title text-danger">2019 - 2023</h6>
                                <p>Carrera de Ingeniería en Sistemas Computacionales</p>
                                <p className="subtitle">Actualmente cursando en el Tecnológico Nacional de México Campus Toluca.</p>
                                <hr/>
                                <h6 className="title text-danger">2016 - 2019</h6>
                                <p>Diploma de preparatoria</p>
                                <p className="subtitle">Cursado en el Instituto Universitario Franco Inglés de México, incorporado a la UAEMex.</p>
                                <br/>
                                <br/>
                                <hr/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                        <div className="card-header">
                                <div className="pull-left">
                                    <h4 className="mt-2">Tecnologías</h4>
                                    <span className="line"></span>  
                                </div>
                            </div>
                            <div className="card-body pb-2">
                                <h6>OpenCV</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>Git</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '70%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>React</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '68%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>Django</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '65%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>Unity</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '60%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>Angular</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '55%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>Tensorflow</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '50%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                        <div className="card-header">
                                <div className="pull-left">
                                    <h4 className="mt-2">Idiomas</h4>
                                    <span className="line"></span>  
                                </div>
                            </div>
                            <div className="card-body pb-2">
                            <h6>Español</h6>
                                    <div className="progress mb-3">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                <h6>Inglés</h6>
                                    <div className="progress mb-3">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{width: '95%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                <h6>Japonés</h6>
                                    <div className="progress mb-3">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                <h6>Francés</h6>
                                    <div className="progress mb-3">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{width: '20%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section bg-dark text-center" id="otros">
            <div className="container">
                <h2 className="mb-5"><span className="text-danger">Otras</span><span className="tit"> Experiencias</span></h2>
                <div className="row text-center">
                    <div className="col-md-6 col-lg-6">
                        <div className="row ">
                            <div className="col-5 text-right text-light border-right py-3">
                                <div className="m-auto"><i className="ti-agenda icon-xl"></i></div>
                            </div>
                            <div className="col-7 text-left py-3">
                                <h3 className="text-danger font-weight-bold font40">Asistente de vendedor de seguros</h3>
                                <p className="text-light mb-1">Encargado de la cotización y administración de pólizas de seguros de autos y de vida.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-5">
                        <div className="row">
                            <div className="col-5 text-right text-light border-right py-3">
                                <div className="m-auto"><i className="ti-music-alt icon-xl"></i></div>
                            </div>
                            <div className="col-7 text-left py-3">
                                <h3 className="text-danger font-weight-bold font40">Músico</h3>
                                <p className="text-light mb-1">Ayudar en la composición de la banda sonora de cortos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Portafolio click={shuffle} datos={datosImp}/>

        <Contact/>

        <footer className="footer py-3">
            <div className="container">
                <p className="small mb-0 text-light">
                    &copy; <script>document.write(new Date().getFullYear())</script> Created With <i className="ti-heart text-danger"></i> By <a href="http://devcrud.com" target="_blank" rel="noreferrer"><span className="text-danger" title="Bootstrap 4 Themes and Dashboards">DevCRUD</span></a> 
                </p>
            </div>
        </footer>

        <script src="https://smtpjs.com/v3/smtp.js"></script>

        <script src="assets/vendors/jquery/jquery-3.4.1.js"></script>
        <script src="assets/vendors/bootstrap/bootstrap.bundle.js"></script>


        <script src="assets/vendors/bootstrap/bootstrap.affix.js"></script>
    
        <script src="assets/vendors/isotope/isotope.pkgd.js"></script>
        
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCtme10pzgKSPeJVJrG1O3tjR6lk98o4w8&callback=initMap"></script>

        <script src="assets/js/script.js"></script>

        

        </div>
    </React.Fragment>
  )
}

export default Web
