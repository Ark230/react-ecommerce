import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import { clearItemFromCart, addItem, reduceItemQty } from '../../redux/cart/cart.actions';


const CheckoutItem = ({cartItem, clearItem, increaseQuantity, reduceQuantity}) => 
{   
    
    const {imageUrl, name, price, quantity, id} = cartItem;

    return (<div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item"/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => reduceQuantity(id)}>&#10094;</div>
                <span className="value">{quantity}</span> 
             <div className="arrow" onClick={() => increaseQuantity(cartItem)}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <span className="remove-button" onClick={() => clearItem(id)}>&#10005;</span>
    </div>)
    
}

const mapDispatchToProps = dispatch => ({
    clearItem: id => dispatch(clearItemFromCart(id)),
    increaseQuantity: item => dispatch(addItem(item)),
    reduceQuantity: id => dispatch(reduceItemQty(id))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);