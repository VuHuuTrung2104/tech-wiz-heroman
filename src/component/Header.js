import { NavLink, Link } from "react-router-dom";
import pictures from '../pictures/istockphoto-1319815121-1024x1024-removebg-preview.png'

function Header () {
    const navItem ={
      textDecoration: 'none',
      color: '#adb5bd' ,
      fontSize: '18px',
      display: 'block',
      padding: '10px ', 
      letterSpacing: '1px',
    };
    const navImage ={
      width:'190px',
      padding: '0px 10px',
    };
    const navImageStream ={
      width:'42px',
      borderRadius: '6px',
      display: 'block',
      margin: 'auto',
    };
    const navSearch ={
     height: '40px',
     
    };
    const navbar = {
      alignItems: 'center',
    };
    const bigNavbar = {
      padding: '0px',
    };
    
    return(
        <nav style={bigNavbar} className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
        <div className="container-fluid">
          <img style={navImage}  src={pictures}></img>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <form class="d-flex" style={navbar}>
                <input style={navSearch} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button style={navSearch} class="btn btn-outline-danger" type="submit">Search</button>
              </form>
              <li className="nav-item">
                <img style={{...navImageStream, filter:'invert(1)'}} src='https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png'></img>
                <NavLink  className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-white border-bottom border-2 border-white' : ''} style={navItem} to={'/'}>Trang chủ</NavLink>
              </li>
              <li className="nav-item">
                <img style={navImageStream} src='https://img.nimo.tv/t/201904201555769461347_1599513189974_avatar.png/l0/img.png'></img>
                <NavLink  className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-white border-bottom border-2 border-white' : ''} style={navItem} to={'/NimoTV-page'}>NimoTv</NavLink>

              </li>
              <li className="nav-item">
                <img style={navImageStream} src='https://img.freepik.com/free-icon/youtube_318-183441.jpg?w=360'></img>
                <NavLink  className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-white border-bottom border-2 border-white' : ''} style={navItem} to={'/Youtube-page'}>Youtube</NavLink>

              </li>
              <li className="nav-item">
                <img style={navImageStream} src='https://img.freepik.com/premium-vector/twitch-logo_578229-259.jpg?w=2000'></img>
                <NavLink  className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'text-white border-bottom border-2 border-white' : ''} style={navItem} to={'/Twitch-page'}>Twitch</NavLink>

              </li>
            </ul>  
            
          </div>
        </div>
      </nav>  
    );
}export default Header;