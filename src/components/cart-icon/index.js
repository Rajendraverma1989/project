import React from 'react';
import './styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/man.svg';

const CartIcon = ({ toggleCartHidden }) => (
    <div className='cart-icon'>
        <ShoppingIcon className='man-icon' />
    </div>
);
export default CartIcon;