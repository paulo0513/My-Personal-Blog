function BlogPost(props) {
  const { title, body, date } = props.blogPost.fields

  return (
    <div>
      <h2>{title}</h2>
      <h4>{body}</h4>
      <h4>{date}</h4>
    </div>
  )
}

export default BlogPost;