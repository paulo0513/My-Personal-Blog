import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav>
      <Link to='/'>
        <button class="home">Home</button>
      </Link>
      <Link to='/new'>
        <button class="new-post">New Post</button>
      </Link>
      <Link to='/about'>
        <button class="about">About</button>
      </Link>
      <Link to='/contact'>
        <button class="contact">Contact</button>
      </Link>
    </nav>
  )
}

export default Nav;