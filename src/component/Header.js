import { NavLink, Link } from "react-router-dom";
import pictures from "../pictures/istockphoto-1319815121-1024x1024-removebg-preview.png";

function Header() {
  const navItem = {
    textDecoration: "none",
    color: "#adb5bd",
    fontSize: "14px",
    display: "block",
    padding: "10px ",
    letterSpacing: "1px",
  };
  const navImage = {
    width: "190px",
    padding: "0px 10px",
  };
  const navImageStream = {
    width: "32px",
    borderRadius: "6px",
    display: "block",
    margin: "auto",
  };
  const navSearch = {
    height: "40px",
  };
  const navbar = {
    alignItems: "center",
  };
  const bigNavbar = {
    padding: "0px",
  };

  return (
    <nav
      style={bigNavbar}
      className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow"
    >
      <div className="container-fluid">
        <img style={navImage} src={pictures}></img>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <form className="d-flex" style={navbar}>
              <input
                style={navSearch}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                style={navSearch}
                className="btn btn-outline-danger"
                type="submit"
              >
                Search
              </button>
            </form>
            <li className="nav-item">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white border-bottom border-2 border-white"
                    : ""
                }
                style={navItem}
                to={"/"}
              >
                <img
                  style={{ ...navImageStream, filter: "invert(1)" }}
                  src="https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png"
                ></img>
                Home Page
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white border-bottom border-2 border-white"
                    : ""
                }
                style={navItem}
                to={"/NimoTV-page"}
              >
                <img
                  style={navImageStream}
                  src="https://img.nimo.tv/t/201904201555769461347_1599513189974_avatar.png/l0/img.png"
                ></img>
                NimoTv
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white border-bottom border-2 border-white"
                    : ""
                }
                style={navItem}
                to={"/Youtube-page"}
              >
                <img
                  style={navImageStream}
                  src="https://img.freepik.com/free-icon/youtube_318-183441.jpg?w=360"
                ></img>
                Youtube
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white border-bottom border-2 border-white"
                    : ""
                }
                style={navItem}
                to={"/Twitch-page"}
              >
                <img
                  style={navImageStream}
                  src="https://img.freepik.com/premium-vector/twitch-logo_578229-259.jpg?w=2000"
                ></img>
                Twitch
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white border-bottom border-2 border-white"
                    : ""
                }
                style={navItem}
                to={"/FavPage"}
              >
                <svg style={navImageStream} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>

                Favourite
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white border-bottom border-2 border-white"
                    : ""
                }
                style={navItem}
                to={"/Feedback-page"}
              >
                <svg style={navImageStream} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>

                My Feedback
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;
