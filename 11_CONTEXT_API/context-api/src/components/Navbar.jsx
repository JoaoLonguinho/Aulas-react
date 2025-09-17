import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">Sobre</NavLink>
      <NavLink to="/contact">Contato</NavLink>
    </>
  )
}

export default Navbar
