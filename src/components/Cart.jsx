import React, { useState } from 'react';
    import { Link } from 'react-router-dom';

    const Cart = ({ cart, removeFromCart, shippingAddress, placeOrder }) => {
      const [showShippingForm, setShowShippingForm] = useState(false);

      const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price, 0);
      };

      const handleCheckout = () => {
        if (!shippingAddress) {
          setShowShippingForm(true);
        } else {
          placeOrder();
        }
      };

      return (
        <div className="cart">
          <h2>Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <span>{item.name} - ${item.price}</span>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </div>
              ))}
              <div className="total">Total: ${calculateTotal()}</div>
              <button className="checkout-button" onClick={handleCheckout}>
                Checkout
              </button>
            </>
          )}
          {showShippingForm && (
            <p>Please add shipping address in account settings</p>
          )}
          <Link to="/">
            <button className="checkout-button">Back to Menu</button>
          </Link>
        </div>
      );
    };

    export default Cart;
