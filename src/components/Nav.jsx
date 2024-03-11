import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <NavLink className="nav" to="/">Home</NavLink>
      <NavLink className="nav"to="/characters">Characters</NavLink>
      <NavLink className="nav" to="/add-character">Add New</NavLink>
    </nav>
    
  )
}

export default Nav