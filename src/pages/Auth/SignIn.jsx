import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebaseconfig";
import {signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword} from "firebase/auth";
import { useState } from "react";

const SignIn = () => {

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

  function signInWithEmail() {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Signed In Successfully.");
      navigate("/create");
    })
    .catch((error) => {
      alert("Unable to sign in. Make sure you have registered.")
    })
  }

  return (
    <div className="auth">
      <Navbar />
      <div className="auth-container">
        <div className="auth-heading">
          <h1>SignIn to create blog</h1>
        </div>
        <div className="auth-form">
          <Link style={{textDecoration: "none"}} to="/signup"><button className="auth-button">Not registered ?</button></Link>
          <input type="email" name="email" id="email" placeholder="Enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }} />
          <input type="password" name="password" id="password" placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }} />
          <button onClick={signInWithEmail} className="auth-button">Sign In</button>
          OR
          <button onClick={signInWithGoogle} className="auth-button">Sign In with Google</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;