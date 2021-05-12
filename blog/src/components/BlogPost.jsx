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
    <div class="home-posts">
      <h2 class="title">{title}</h2>
      <h4 class="body">{body}</h4>
      <h4 class="date">{date}</h4>
      <button class="delete"onClick={deletePost}>Delete</button>
      <Link class="edit" to={`/edit/${props.blogPost.id}`}>edit</Link>
    </div>
  )
}

export default BlogPost;