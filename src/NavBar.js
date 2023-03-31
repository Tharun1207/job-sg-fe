import { Link } from "react-router-dom"

const NavBar = () => {
    return ( 
        // Navbar component
        <nav className = "navBar">
            {/* Clickable brand name and logo to go to homepage */}
            <Link to="/" className="brand">
                <img src={require("./images/logo.png")}></img>
                <Link to="/" className="brandName">JobSG</Link>
            </Link>

            {/* Other clickable links */}
            <div className="links">
                <Link to="/" className="searchJob">Search Job</Link>
                <Link to="/" className="profile">
                    <img src={require("./images/account_circle.png")}></img>
                </Link>
            </div>
        </nav>
     );
}
 
export default NavBar;