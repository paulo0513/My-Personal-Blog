function BlogPost(props) {
  const { title, body } = props.blogPost.fields

  return (
    <div>
      <h2>{title}</h2>
      <h4>{body}</h4>
    </div>
  )
}

export default BlogPost;