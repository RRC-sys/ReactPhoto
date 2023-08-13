import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {

    const [sidenavInstance, setSidenavInstance] = useState(null);

    useEffect(() => {
        const tooltipElems = document.querySelectorAll('.tooltipped');
        window.M.Tooltip.init(tooltipElems);
    }, []);

    useEffect(() => {
        const sidenavElem = document.querySelector('.sidenav');
        const instance = window.M.Sidenav.init(sidenavElem);
        setSidenavInstance(instance);
    }, []);

    const handleMenuToggle = () => {
        if (sidenavInstance) {
            sidenavInstance.open();
        }
    };

  return (
    <nav className="nav-wrapper transparent">
        <div className="container">
            <NavLink to="/" className="brand-logo">
                Photos
            </NavLink>
            <NavLink
                    className="sidenav-trigger"
                    data-target="mobile-menu"
                    onClick={handleMenuToggle}
                    style={{cursor: "pointer"}}
            >
                    <i className="material-icons">menu</i>
            </NavLink>
            <ul className="right hide-on-med-and-down">
                <li>
                    <HashLink smooth to="/#photos">
                        Photo's
                    </HashLink>
                </li>
                <li>
                    <HashLink smooth to="/#services">
                        Services
                    </HashLink>
                </li>
                <li>
                    <HashLink smooth to="/#contacts">
                        Contact
                    </HashLink>
                </li>
                <li>
                    <NavLink to="/" className="tooltipped btn-floating btn-small indigo darken-4" data-tooltip="Instagram">
                        <i className="fab fa-instagram"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className="tooltipped btn-floating btn-small indigo darken-4" data-tooltip="Facebook">
                        <i className="fab fa-facebook"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className="tooltipped btn-floating btn-small indigo darken-4" data-tooltip="Twitter">
                        <i className="fab fa-twitter"></i>
                    </NavLink>
                </li>
            </ul>
            <ul className="sidenav grey lighten-2" id="mobile-menu">
                <li>
                    <NavLink to="/">
                        Photo's
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar