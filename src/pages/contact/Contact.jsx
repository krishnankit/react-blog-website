import './contact.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Contact = () => {
  return (
    <div className='contact'>
      <Navbar />
      <div className="contact-container">
        <div className="contact-heading">
          <h1>Contact Us</h1>
        </div>
        <div className="contact-form">
          <div className="contact-form-control">
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='Last Name'/>
          </div>
          <div className="contact-form-control">
            <input type="email" placeholder='Email'/>
            <input type="text" placeholder='Contact No'/>
          </div>
          <div className="contact-message">
            <label htmlFor="message">Write Your Message below</label>
            <textarea id='message'></textarea>
          </div>
            
            <button>Submit</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact