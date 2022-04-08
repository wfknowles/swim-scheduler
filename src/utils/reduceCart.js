export const reduceCart = (cart, date, time) => {

    let updatedCart;

    const selection = {
      date: date, 
      time: time
    };

    const itemIndex = cart.findIndex(item => {
      return item.date === selection.date && item.time === selection.time
    });

    if ( itemIndex >= 0 ) {
      
      // true - remove from cart
      cart.splice(itemIndex, 1);
      updatedCart = [ ...cart ];

    } else {
      
      // false - add to cart
      updatedCart = [
        ...cart,
        selection
      ]
    }

    return updatedCart;
}

export const inCart = (cart, date, time) => {

  const selection = {
    date: date, 
    time: time
  };

  const itemIndex = cart.findIndex(item => {
    return item.date === selection.date && item.time === selection.time
  });

  if (itemIndex === -1) {
    return false
  }

  return true;

}