import React from 'react';
import './header.styles.scss';

import {ReactComponent as Logo} from '../../assets/original.svg';
import {Link} from 'react-router-dom';

const Header = () => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
        <Link to="/shop" className="option">SHOP</Link>
        <Link to="/contact" className="option">CONTACT</Link>

        </div>
    </div>
);
 
export default Header;