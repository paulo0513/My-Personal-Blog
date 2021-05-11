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
    <div>
      <h2>{title}</h2>
      <h4>{body}</h4>
      <h4>{date}</h4>
      <button onClick={deletePost}>Delete</button>
      <Link to={`/edit/${props.blogPost.id}`}>edit</Link>
    </div>
  )
}

export default BlogPost;