import Footer from "../../components/footer/Footer";
import "./auth.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const SignUp = () => {
  return (
    <div className="auth">
      <Navbar />
      <div className="auth-container">
        <div className="auth-heading">
          <h1>SignUp to create blog</h1>
        </div>
        <div className="auth-form">
          <Link style={{textDecoration: "none"}} to="/signin"><button className="auth-button">Already registered ?</button></Link>
          <input type="email" name="email" id="email" placeholder="Enter email" />
          <input type="password" name="password" id="password" placeholder="Enter password"/>
          <button className="auth-button">Sign Up</button>
          OR
          <button className="auth-button">Sign In with Google</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;