import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* column 1 */}
          <div className="col">
            <h4> Pizza factory</h4>
            <ul className="list-unstyled">
              <li>
                <BsFacebook /> Facebook
              </li>
              <li>
                <FaInstagramSquare /> Instagram
              </li>
              <li>
                <AiFillTwitterCircle />
                Twitter
              </li>
            </ul>
          </div>
          {/* column 2 */}
          <div className="col">
            <h4> About</h4>
            <ul className="list-unstyled">
              <li>About us</li>
              <li>Contactless delivery</li>
              <li>career </li>
            </ul>
          </div>
          {/* column 3 */}
          <div className="col">
            <h4>Contact us</h4>
            <ul className="list-unstyled">
              <li>Pizza Factory</li>
              <li> Jagtial Rd, Bank Colony,</li>
              <li>Karimnagar, Telangana</li>
              <li>Karimnagar, Telangana</li>
              <li>505001</li>
              <li>Phone: 1800 208 1234</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm text-center">
            &copy;{new Date().getFullYear()} PIZZA FACTORY | All rights reserved
            by pizza factory
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
