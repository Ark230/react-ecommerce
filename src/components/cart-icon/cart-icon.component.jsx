import React from 'react';
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import {connect} from 'react-redux';
import {toogleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

const CartIcon = ({toogleCartHidden, cartItemsQty}) => (
    <div className="cart-icon" onClick={toogleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{cartItemsQty}</span>
    </div>

)


const mapStateToProps = state => {
    return {
        cartItemsQty: selectCartItemsCount(state)
    }
}

const mapDispatchToProps = dispatch => ({
    toogleCartHidden: () => {dispatch(toogleCartHidden())}
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
