import Footer from "../../components/footer/Footer";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { auth } from "../../firebaseconfig";
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then(result => {
      console.log(result);
      alert("Signed Up!");
      navigate("/create");
    })
    .catch(error => {
      alert("Unable to Login")
    })
  }

  function signUpWithEmail() {
    createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      alert("Signed un successfully!");
      navigate("/create");
    })
    .catch(error => {
      alert("Unable to Sign Up. Try again.")
    })
  }

  return (
    <div className="auth">
      <Navbar />
      <div className="auth-container">
        <div className="auth-heading">
          <h1>SignUp to create blog</h1>
        </div>
        <div className="auth-form">
          <Link style={{textDecoration: "none"}} to="/signin"><button className="auth-button">Already registered ?</button></Link>
          <input type="email" name="email" id="email" placeholder="Enter email" 
          value = {email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}/>
          <input type="password" name="password" id="password" placeholder="Enter password (atleast 6 characters)"
          value = {password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}/>
          <button onClick={signUpWithEmail} className="auth-button">Sign Up</button>
          OR
          <button onClick={signInWithGoogle} className="auth-button">Sign In with Google</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;