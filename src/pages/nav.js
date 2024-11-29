import React, { useState } from "react";
import "../styles/nav.css"; // Make sure you have the CSS file for styling
import { Link } from "react-router-dom";
import Facebook from "../facebook";
import Instagram from "../instagram";
import Cart from "../cart";
const Navbar = () => {
  const [language, setlanguage] = useState(" AR ");
  return (
    <>
      <nav className="navbar">
        {/* logo/ */}
        <div className="logo">
          {" "}
          <img alt="" src="/images/joystick.png"></img>{" "}
        </div>
        {/* logo/ */}
        {/* links/ */}
        <div className="links">
          {" "}
          <ul>
            <li>
              {" "}
              <Link>Contact</Link>
            </li>
            <li>
              <Link>Purchase</Link>
            </li>
            <li>
              <Link>Products</Link>
            </li>
            <li>
              <Link>Best sellers</Link>
            </li>
            <li>
              <Link>Gift quiz</Link>
            </li>
            <li>
              <Link>
                <Cart />
              </Link>
            </li>
          </ul>
        </div>

        {/* links/ */}
        {/* accounts/ */}
        <div className="accounts">
          {" "}
          <ul>
            <li>
              {" "}
              <Link>
                <Facebook />
              </Link>
            </li>
            <li>
              <Link>
                {" "}
                <Instagram />
              </Link>
            </li>
          </ul>
        </div>

        {/* accounts/ */}
      </nav>
    </>
  );
};

export default Navbar;
