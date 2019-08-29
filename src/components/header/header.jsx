import React from 'react';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase-util';
import logo from '../../assets/logo.png';
import './header.styles.scss';

const Header = ({ currentUser })=>{
    return(
        <>
            <div className="header-content">
                <div className="logo">
                <Link to="/">
                    <img  className="logo-image" src={logo} alt="logo"/>
                </Link>
                </div>
                <div className="options">
                    <Link to="/shop" className="link">
                        SHOP
                    </Link>
                    <Link to="/contact" className="link">
                        CONTACT
                    </Link>
                    {
                        currentUser ? 
                        <div onClick={()=>auth.signOut()} className="link">SIGN OUT</div>
                        :
                        <Link to="/signin-signup" className="link">SIGN IN</Link>
                    }
                </div>
            </div>
        </>
    )
}

export default Header;