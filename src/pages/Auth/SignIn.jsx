import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./auth.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="auth">
      <Navbar />
      <div className="auth-container">
        <div className="auth-heading">
          <h1>SignIn to create blog</h1>
        </div>
        <div className="auth-form">
          <Link style={{textDecoration: "none"}} to="/signup"><button className="auth-button">Not registered ?</button></Link>
          <input type="email" name="email" id="email" placeholder="Enter email" />
          <input type="password" name="password" id="password" placeholder="Enter password"/>
          <button className="auth-button">Sign In</button>
          OR
          <button className="auth-button">Sign In with Google</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;