import React, { useContext } from 'react'
import CartItems from '../Components/CartItems/Cartitems'
import './CSS/Cart.css'
import { ShopContext } from '../Context/ShopContext'

const Cart = () => {
  return (
    <div>
      <CartItems />
    </div>
  )
}

export default Cart