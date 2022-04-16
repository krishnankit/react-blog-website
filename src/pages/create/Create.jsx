import "./create.css";
import Navbar from '../../components/navbar/Navbar'
import Footer from "../../components/footer/Footer";

const Create = () => {
  return (
    <div className="create">
      <Navbar />
      <div className="create-container">
        <div className="heading">
          <h1>Enter Details for blog</h1>
        </div>
        <div className='form'>
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
          </div>
          <div className="form-control">
            <label htmlFor="author">Author</label>
            <input type="text" name="author" id="author" />
          </div>
          <div className="form-control">
            <label htmlFor="image">Image URL</label>
            <input type="text" name="image" id="image" />
          </div>
          <div className="form-data">
            <label htmlFor="description">Description (45 to 55 words)</label>
            <textarea type="text" name="description" id="description" />
          </div>
          <div className="form-data">
            <label htmlFor="content">Content</label>
            <textarea name="content" id="content"></textarea>
          </div>
          <button>Submit</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Create