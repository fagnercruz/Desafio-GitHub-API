import "./style.css";
import "@popperjs/core";
import "bootstrap/js/src/collapse";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary navbar navbar-dark navbar-expand-md main-nav">
      <div className="container-fluid">
        <Link to="/" className="navLogo">
          <h4>Github API</h4>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
