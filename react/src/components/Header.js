import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="navbar">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src="images/logo.svg" alt="WebDev logo" />
        </a>
        <nav className="navbar-nav">
          <ul>
            <li>
              <Link to="/">მთავარი </Link>
            </li>
            <li>
              <Link to="/about-us">შესახებ </Link>{" "}
            </li>
            <li>
              <Link to="/contact">კონტაქტი </Link>{" "}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
