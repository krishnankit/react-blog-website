import './home.css';
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import Blog from '../../components/blog/Blog';
import { useEffect, useState } from 'react';
import {collection, query, onSnapshot} from "firebase/firestore";
import {db} from "../../firebaseconfig";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'blogs'))
    onSnapshot(q, (querySnapshot) => {
      setBlogs(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  },[])

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
        {blogs.map(blog => {
          return <Blog key={blog.id} id={blog.id} title={blog.data.title} description={blog.data.description} img={blog.data.img} author={blog.data.author} />
        })}
      </div>
      <div className='read-all'>
        <Link to="/allblogs"><button>Read All Blogs</button></Link>
      </div>
    </div>
  </div>
  )
}

export default Home



