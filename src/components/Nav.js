import React from 'react';
import { NavLink } from 'react-router-dom';

//import {Form} from 'react-bootstrap'
//import {FormControl} from 'react-bootstrap';
//import { Button } from 'react-bootstrap';

//import { Navbar, Form, FormControl, Button } from 'react-bootstrap';

const Nav = () => {
    return (
        <nav className="Nav">
            <div className="Nav__container">
                <NavLink to="/" className="Nav__brand">
                    <img src="logo.svg" alt="Navbar" className="Nav__logo" />
                </NavLink>

                <div className="Nav__right">
                    <ul className="Nav__item-wrapper">
                        <li className="Nav__item">
                            <NavLink exact activeClassName="selected" className="Nav__link" to="/">Home</NavLink>
                        </li>
                        <li className="Nav__item">
                            <NavLink activeClassName="selected" className="Nav__link" to="/About">About</NavLink>
                        </li>
                        <li className="Nav__item">
                            <NavLink activeClassName="selected" className="Nav__link" to="/Blog">Blog</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

}



export default Nav;