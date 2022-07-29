import React from 'react';

const Portafolio = ({ click, datos }) => {
    
    return (
        <section className="section bg-custom-gray" id="portfolio">
                <div className="container">
                    <h1 className="mb-5"><span className="text-danger">Mi</span> Portafolio</h1>
                    <div className="portfolio">
                        {/* <div className="filters">
                            <button data-filter=".python" className="active" onClick={() => click('pythonfilter')}>
                                Python
                            </button>
                            <button data-filter=".java" onClick={() => click('javafilter')}>
                                Java
                            </button>
                            <button data-filter=".web" onClick={() => click('webfilter')}>
                                Web
                            </button>
                        </div> */}
                        <div className="filters">
                            <a id="pythonfilter" href="#portafolio" onClick={() => click('pythonfilter')} className="active">
                                Python
                            </a>
                            <a id="javafilter" href="#portafolio" onClick={() => click('javafilter')}>
                                Java
                            </a>
                            <a id="webfilter" href="#portafolio" onClick={() => click('webfilter')}>
                                Web
                            </a>
                        </div>
                        <div className="portfolio-container">
                           {datos.map((dato) => (
                             <div className="col-lg-6 col-lg-6 center" key={dato.id}>
                                <div className={dato.clase}>
                                    <div className="portfolio-item">
                                        <img src={dato.imagen} className="img-fluid" alt="Not found"/>
                                        <div className="content-holder">
                                            <a className="img-popup" href={dato.imagen}> </a>
                                            <div className="text-holder">
                                                <h6 className="title">{dato.titulo}</h6>
                                                <p className="subtitle">{dato.descripcion}</p>
                                            </div>
                                        </div> 
                                    </div>          
                                </div>
                                <a className="text-danger" href={dato.referencia} target="_blank" rel="noreferrer">Ver código</a>
                            </div>  
                           ))}              
                        </div> 
                    </div>  
                </div>            
            </section>
      )
}

export default Portafolio
