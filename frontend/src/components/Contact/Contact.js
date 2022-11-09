import "./contact.css";
import Header from "../Header/header";
import Footer from '../Footer/Footer'
const Contact = () => {
  return (
    <section className="contact">
      <Header />
      <div className="contact-wrapper">
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-house-fill">Adress</i>
          </div>
          <p className="contact-item-text">Jordan-Amman</p>
        </div>
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-telephone-fill">Phone</i>
          </div>
          <p className="contact-item-text">123-456-789</p>
        </div>
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-envelope-fill">Email</i>
          </div>
          <p className="contact-item-text">info@donation.com</p>
        </div>
      </div>
      <form onSubmit={e => e.preventDefault()} className="contact-form">
        <h2 className="contact-form-title">Contact Us Form</h2>
        <h2 className="contact-form-title">We'd love to hear from you.</h2>
        <div className="contact-input-wrapper">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Subject" />
          <input type="text" placeholder="Email" />
        </div>
        <textarea
          className="contact-textarea"
          placeholder="Your Message"
          rows="5"
        ></textarea>
        <button className="contact-btn">Send</button>
      </form>
      {/* <Footer/> */}
    </section>
  );
};
export default Contact;
//still need
// | columns 
//vaildition
//map
//footer
