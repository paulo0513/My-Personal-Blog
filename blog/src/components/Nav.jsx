import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav className="navbar">
      <Link to='/'>
        <button className="nav-home">Home</button>
      </Link>
      <Link to='/new'>
        <button className="nav-post">New Post</button>
      </Link>
      <Link to='/about'>
        <button className="nav-about">About</button>
      </Link>
      <Link to='/contact'>
        <button className="nav-contact">Contact</button>
      </Link>
    </nav>
  )
}

export default Nav;