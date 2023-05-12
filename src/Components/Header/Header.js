import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import pizzaLogo from "../../Assets/logo/logo.png";

import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.productR.cart.length);

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
          <Button
            type="button"
            variant="danger"
            onClick={() => navigate("/cart")}
          >
            <FaShoppingCart />
            <sup>{cartData}</sup>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
