import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase-utils';
import { connect} from 'react-redux';

import CartIcon from '../cart-icon';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import './styles.scss';

const Header = (props) => (
    <div>
    <div className="header">
    <Link className="logo-container" to="/">
     <Logo className="logo" />
    </Link>
    <div className="optiontext">
        <span>CBSE: Grade 5 Maths - Algebra</span>
    </div>
    <div className="options">
        { props.currentUser ? 
        <div className="option" onClick={ ()=> auth.signOut()}>
        SIGN OUT</div>
        :
       <Link className="option" to="/signin">SIGN IN</Link>
        }
        <CartIcon />
        <span>John</span>
    </div>
    </div>
    <hr />
    </div>
);

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden

})
export default connect(mapStateToProps)(Header);