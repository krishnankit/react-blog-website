import "./navbar.css";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
      <div className="branding">
        <Link style={{textDecoration: "none", color: "white"}} to="/"><h1><span>KD</span>Blogs</h1></Link>
      </div>
      <ul className="menu">
        <li className="menu-item"><Link 
        style={{ textDecoration: 'none', height: '100%', width: '100%', color: 'white', fontSize: '1.2rem' }} 
        to="/">Home</Link></li>
        <li className="menu-item"><Link 
        style={{ textDecoration: 'none', height: '100%', width: '100%', color: 'white', fontSize: '1.2rem' }} 
        to="/signin">Create</Link></li>
        <li className="menu-item"><Link 
        style={{ textDecoration: 'none', height: '100%', width: '100%', color: 'white', fontSize: '1.2rem' }} 
        to="/contact">Contact</Link></li>
      </ul>
    </div>
  </div>
      
  )
}

export default Navbar