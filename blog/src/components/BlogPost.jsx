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
        <h2 class="post-title">{title}</h2>
        <h4 class="post-date">{date}</h4>
        <button class="post-delete"onClick={deletePost}>Delete</button>
        <Link class="post-edit" to={`/edit/${props.blogPost.id}`}><button>Edit</button></Link>
        <h4 class="post-body">{body}</h4>
    </div>
  )
}

export default BlogPost;