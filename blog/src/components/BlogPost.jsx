import axios from "axios"
import { Link } from "react-router-dom"
import { baseBlogURL, config } from "../services"

function BlogPost(props) {
  const deletePost = async () => {
    const specificURL = `${baseBlogURL}/${props.blogPost.id}`;
    await axios.delete(specificURL, config);
    props.setToggleFetch((curr) => !curr)
  }

  const { title, body, date } = props.blogPost.fields

  return (
    <div className="home-posts">
        <h2 className="post-title">{title}</h2>
        <h4 className="post-date">{date}</h4>
        <button className="post-delete"onClick={deletePost}>Delete</button>
        <Link className="post-edit" to={`/edit/${props.blogPost.id}`}><button>Edit</button></Link>
        <h4 className="post-body">{body}</h4>
    </div>
  )
}

export default BlogPost;