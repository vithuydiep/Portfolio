import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="c-left">
        <span>Get in Touch</span>
        <span>Contact me</span>
        <div
          className="blur c-blur2"
          style={{ backgroundColor: "#ABF1FF94" }}
        />
      </div>
      <div className="c-right">
        <div className="blur c-blur"></div>
        <form>
          <input type="text" className="c-input" placeholder="Name" />
          <input type="text" className="c-input" placeholder="Email" />
          <textarea className="c-input c-area" placeholder="Message" />
          <button className="button c-btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
