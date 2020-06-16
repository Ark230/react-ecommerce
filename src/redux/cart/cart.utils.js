
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItemIndex = cartItems.findIndex(cartItem => cartItem.id == cartItemToAdd.id);

    if(existingCartItemIndex != '-1'){
        return cartItems.map(item => {
                if(item.id == cartItemToAdd.id){
                    return {...item, quantity: item.quantity+1}
                }
                return item;
            });
    }
    
    return [...cartItems, {...cartItemToAdd, quantity:1}];

} 

export const clearItemFromCart = (cartItems, id) => {

   return cartItems.filter(item => item.id != id);

}

export const reduceItemQty = (cartItems, id) => {
  
    return cartItems.map(item => item.id == id & item.quantity>1 ? {...item, quantity:item.quantity-1} : item)
}