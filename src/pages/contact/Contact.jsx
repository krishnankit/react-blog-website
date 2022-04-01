import './contact.css';
import Navbar from '../../components/navbar/Navbar';

const Contact = () => {
  return (
    <div className='contact'>
      <Navbar />
      <div className="contact-container">
        <div className="heading">
          <h1>Contact Us</h1>
        </div>
        <div className="form">
          <div className="form-control">
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='Last Name'/>
          </div>
          <div className="form-control">
            <input type="email" placeholder='Email'/>
            <input type="text" placeholder='Contact No'/>
          </div>
          <div className="message">
            <label htmlFor="message">Write Your Message below</label>
            <textarea id='message'></textarea>
          </div>
            
            <button>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Contact