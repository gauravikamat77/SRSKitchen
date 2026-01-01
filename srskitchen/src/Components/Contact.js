import "./Contact.css";
import cont from "../images/contact.jpeg";
function Contact() {
  return (
    <div className="contact">
      {/* Hero */}
      <div className="contact-hero" style={{  backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${cont})`}}>
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Reach out anytime.</p>
      </div>

      {/* Content */}
      <div className="contact-container">
        {/* Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have a question, feedback, or just want to say hello?
            Fill out the form and we’ll get back to you soon.
          </p>

          <div className="info-item">
            📧 support@example.com
          </div>
          <div className="info-item">
            📍 Margao, Goa.
          </div>
        </div>

        {/* Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button className="ui green button big" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
