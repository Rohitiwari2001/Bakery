import { NavLink } from "react-router-dom"
function Navbar() {
    return(
        <nav>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" href="#">BAKERY</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/about">About</NavLink>
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
        <NavLink className="nav-link" to="/services">Services</NavLink>
      </div>
      <button onClick={()=>navigate("/cart")} className='btn btn-primary'>Cart</button>
    </div>
  </div>
</nav>
        </nav>
    )
}
export default Navbar