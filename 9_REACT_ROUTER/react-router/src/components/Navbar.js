// 2- Links com react router
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
    </nav>
  )
}

export default Navbar
