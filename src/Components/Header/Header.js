import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import pizzaLogo from "../../Assets/logo/logo.png";
import "./Header.css";
import { logoutAction } from "../../Redux/Actions/UserActions";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.productR.cart.length);
  const userData = useSelector((state) => state.userR.login);

  return (
    <Navbar>
      <Container fluid>
        <Navbar.Brand>
          <img src={pizzaLogo} alt="Pizza Factory logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                color: "oldlace",
                margin: "0px 5px",
              }}
            >
              Home
            </NavLink>
          </Nav>
          <Button
            type="button"
            variant="danger"
            onClick={() => navigate("/cart")}
            className="mx-2"
          >
            <FaShoppingCart />
            <sup>{cartData}</sup>
          </Button>
          {Object.values(userData)?.length > 0 ? (
            <Button
              variant="secondary"
              onClick={() => dispatch(logoutAction())}
            >
              Logout
            </Button>
          ) : (
            <div className="">
              <NavLink
                to="/signUp"
                style={{
                  textDecoration: "none",
                  color: "#ffc107",
                  margin: "0px 5px",
                }}
              >
                Sign Up
              </NavLink>
              <NavLink
                to="/signIn"
                style={{
                  textDecoration: "none",
                  color: "#ffc107",
                  margin: "0px 5px",
                }}
              >
                Sign In
              </NavLink>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
