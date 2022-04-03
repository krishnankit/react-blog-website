import './home.css';
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import Blog from '../../components/blog/Blog';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="home-container">
        <div className="showcase">
          <div className='showcase-color'>
            <div>
              <h1>Welcome!</h1> <p>to the world of Knowledge</p>
            </div>
          </div>
      </div>
      <div className="blogs">
        <Blog />
        <Blog />
        <Blog />
      </div>
      <div className='read-all'>
        <button>Read All Blogs</button>
      </div>
    </div>
  </div>
  )
}

export default Home



