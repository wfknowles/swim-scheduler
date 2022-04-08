import React, { useState } from 'react';
import { reduceCart } from '../../utils/reduceCart.js';
import { formatTime, formatDate } from '../../utils/dateTimeFormatting.js';

function Cart (props) {

  const [ cartToggle, setCartToggle ] = useState(false);

  const clickHandler = (date, time) => {

    const updatedCart = reduceCart(props.cart, date, time);

    if (updatedCart.length === 0) {
      setCartToggle(false);
    }

    props.setCart(
      updatedCart
    )
  }

  return (
    <div className="cart-wrapper">

      <div>
        <button className="btn-cart" onClick={()=>(setCartToggle(!cartToggle))}>
              Cart
          { 
            (props.cart.length > 0 && !cartToggle ) && (
              <span className="cart-counter">{props.cart.length}</span>
            ) 
          }
        </button>
      </div>

      <div className="cart-anchor">
        <div>
            {
              cartToggle && (

                <div className="cart-contents">
                  { 
                    props.cart.length === 0 && (
                      <div className="row">
                        <div className="col-sm-12">
                          Select a time to add to cart.
                        </div>
                      </div>
                    )
                  }
                  { 
                    props.cart.length >= 1 && (
                      props.cart.map(item => (

                        <div className="row" key={`${item.date}-${item.time}`}>
                          <div className="col-sm-12 py-1 d-flex justify-content-between">
                            <div>
                              {
                                `${formatDate(item.date)} - ${formatTime(item.date, item.time)}`
                              }
                            </div>
                            <div>
                              <button className="btn-cart-remove" onClick={(e) => (clickHandler(item.date, item.time))}>X</button>
                            </div>
                          </div>
                        </div>
    
                      ))
                    )
                    
                  }
                </div>

              )
            }
        </div>        
      </div>
    </div>
    
  )
}

export default Cart;