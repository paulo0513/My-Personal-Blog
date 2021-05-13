import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav className="navbar">
      <a className="brand" href="#">paul</a>
      <ul>
        <li>
          <Link to='/'>
            <a href="#" className="nav-home">Home</a>
          </Link>
        </li>
        <li>
          <Link to='/new'>
            <a href="#" className="nav-post">New Post</a>
          </Link>
        </li>
        <li>
          <Link to='/about'>
            <a href="#" className="nav-about">About</a>
          </Link>
        </li>
        <li>
          <Link to='/contact'>
            <a href="#" className="nav-contact">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;