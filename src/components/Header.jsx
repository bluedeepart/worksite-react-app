import Container from "./shared/Container";
import logo from "../logo.svg";
import PropTypes from "prop-types";
import Nav from "./Nav";
import Button from "./shared/Button";
import User from "./User";
import hamburgerMenu from "../assets/images/hamburgerMenu.png";
import { Link } from "react-router-dom";

function Header({ title }) {
  return (
    <header>
      <Container cssClasses="flex justify-between items-center py-10">
        <div className="lg:w-1/4">
          <Link to="/">
            <img src={logo} alt={title} />
          </Link>
        </div>

        <Nav />
        <User />

        <Button cssClass="menu-btn lg:hidden" btnId="menu-btn">
          <img src={hamburgerMenu} alt="Menu" />
        </Button>
      </Container>
    </header>
  );
}

Header.defaultProps = {
  title: "Workside",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
