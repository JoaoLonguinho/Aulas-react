// 2- Links com react router
import "./Navbar.css"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link> */}

        <NavLink to="/" className={({isActive}) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
    </nav>
  )
}

export default Navbar
