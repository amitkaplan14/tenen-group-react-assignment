import React from 'react';
import { Link } from "react-router-dom";

const style = {
  navbar: {
      borderBottom: "1px solid gray"
  }
};

function Header() {
    return (
        <div>
            <nav className="navbar" style={style.navbar}>
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/">Home Page</Link>
                    </li>
                    <li>
                        <Link to="/product">Product</Link>
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default Header;
