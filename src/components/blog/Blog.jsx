import "./blog.css"
import { Link } from 'react-router-dom'

const Blog = ({id, title,description, author, img}) => {
  return (
    <div className="blog">
      <h1 className="title">{title}</h1>
      <p className="author">by {author}</p>
      <div className="img">
        <img src={img} alt="Img" />
      </div>
      <p className="des">
        {description}
      </p>
      <Link className='read-more' to={`/blog/${id}`}><button>Read More</button></Link>
    </div>
  )
}

export default Blog