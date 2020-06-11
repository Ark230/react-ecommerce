
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItemIndex = cartItems.findIndex(cartItem => cartItem.id == cartItemToAdd.id);

    if(existingCartItemIndex != '-1'){
        cartItems[existingCartItemIndex].quantity+=1;   
        return [...cartItems];
        
    }

    return [...cartItems, {...cartItemToAdd, quantity:1}];

} 