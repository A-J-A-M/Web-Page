import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    require('dotenv').config()

    const sendEmail = (e) => {
      
      e.preventDefault();
  
      emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID)
        .then((result) => {
            alert('Mensaje enviado con éxito');
        }, (error) => {
            alert('Hubo un error al enviar el mensaje. Inténtelo de nuevo');
        });
        document.getElementById('email-send').value = '';
        document.getElementById('nombre-email').value = '';
        document.getElementById('message-email').value = '';
    };
  return (
    <div className="section contact" id="contact">
      <div id="map" className="map"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="contact-form-card">
              <h4 className="contact-title">Deja un mensaje</h4>
              <form id="mens" ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                  <input
                    id="nombre-email"
                    name="user_name"
                    className="form-control"
                    type="text"
                    placeholder="Nombre *"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    id="email-send"
                    name="user_email"
                    className="form-control"
                    type="email"
                    placeholder="Email *"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    id="message-email"
                    name="message"
                    className="form-control"
                    placeholder="Message *"
                    rows="7"
                    required
                  ></textarea>
                </div>
                <div className="form-group ">
                  <button
                    type="submit"
                    className="form-control btn btn-primary"
                  >
                    Enviar mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-info-card">
              <h4 className="contact-title">Contactos</h4>
              <div className="row mb-2">
                <div className="col-1 pt-1 mr-1">
                  <i className="ti-mobile icon-md"></i>
                </div>
                <div className="col-10 ">
                  <h6 className="d-inline">
                    Celular <br />{" "}
                    <span className="text-muted">+52 (722) 14-68-376</span>
                  </h6>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-1 pt-1 mr-1">
                  <i className="ti-envelope icon-md"></i>
                </div>
                <div className="col-10">
                  <h6 className="d-inline">
                    Email :<br />{" "}
                    <a href="mailto:jordiavalos3@gmail.com">
                      <span>jordiavalos3@gmail.com</span>
                    </a>
                  </h6>
                </div>
              </div>
              <ul className="social-icons pt-4">
                {/* <li className="social-item"><a className="social-link text-dark" href="https://www.linkedin.com/in/alan-jordi-avalos-medina-9a6478240/" target="_blank"><i className="ti-linkedin" aria-hidden="true" ></i></a></li>
                                <li className="social-item"><a className="social-link text-dark" href="https://github.com/A-J-A-M" target="_blank"><i className="ti-github" aria-hidden="true"></i></a></li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
