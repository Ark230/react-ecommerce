import {CartActionTypes} from './cart.types';


export const toogleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const clearItemFromCart = id => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload:id
})

export const reduceItemQty = id => ({
    type: CartActionTypes.REDUCE_ITEM_QTY,
    payload: id
})