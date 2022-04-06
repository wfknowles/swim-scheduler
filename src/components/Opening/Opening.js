import React from 'react';
import { reduceCart, inCart } from '../../utils/cartReducer.js';
import { formatTime } from '../../utils/dateTimeFormatting.js';

function Opening (props) {

  const isActive = () => {

    return inCart(props.cart, props.date, props.data.time) ? "active" : "";

  }

  const clickHandler = () => {

    const updatedCart = reduceCart(props.cart, props.date, props.data.time);

    props.setCart(
      updatedCart
    )
  }

  return (

    <div >
      <button className={`btn btn-select-time ${isActive()}`} onClick={clickHandler}>
        { formatTime(props.date, props.data.time) }
      </button>
    </div>

  )
}

export default Opening;