import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Contact = () => {
  return (
    <section id="contacts" className="contact">
      <h1 className="title">Contacts</h1>

      <div className="container">
        <div className="contact-card">
          <i className="fa-solid fa-phone"></i>
          <h3>Phone</h3>
          <p>+20111 578 2802</p>
        </div>
        <div className="contact-card">
          <i className="fa-regular fa-envelope"></i>
          <h3>Email</h3>
          <p>yasserabdalla149@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
