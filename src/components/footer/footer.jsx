import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="footer_col">
        <div className="footer_left">
          <h3>Let’s Connect ^-^</h3>
          <p>If you’d like to know more or collaborate, feel free to drop a message below.</p>
        </div>
        <div className="footer_right">
          <h3>Drop me a message</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required/>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className="footer_bottom">
        <p>Made with ❤️ by Ruchika Meena</p>
      </div>
    </div>
  );
};
export default Footer;
