import "./blog.css"
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div className="blog">
      <h1 className="title">Lorem ipsum dolor sit amet.</h1>
      <p className="author">by Lorem, ipsum.</p>
      <div className="img">
        <img src="https://images.unsplash.com/photo-1635107090359-a3c5bc03e0a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHduenBMeHMwblFZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="Img" />
      </div>
      <p className="des">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate necessitatibus similique vitae, quam non est.
      </p>
      <Link className='read-more' to='/'><button>Read More</button></Link>
    </div>
  )
}

export default Blog