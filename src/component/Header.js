import { NavLink, Link } from "react-router-dom";


function Header () {
    const navItem ={
        textDecoration: 'none',
        color: '#000',
        fontWeight: 'Bold',
        margin: '10px',
    };
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} style={navItem} to={'/'}>Trang chu</NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} style={navItem} to={'/my-todo'}>Todo</NavLink>
              </li>
            </ul>  
            
          </div>
        </div>
      </nav>  
    );
}export default Header;