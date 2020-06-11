import React from 'react';
import './cart-icon.styless.scss';

import { ReactComponent as ShoppingIcon} from '../../assets/shopping.svg';

export const CartIcon = () => (
  <div className='cart-icon'>
    <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'> 0 </span>
  </div>
);