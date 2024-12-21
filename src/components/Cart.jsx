import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import { useTranslation } from 'react-i18next';

    const Cart = ({ cart, removeFromCart, shippingAddress, placeOrder }) => {
      const { t } = useTranslation();
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
          <h2>{t('cart')}</h2>
          {cart.length === 0 ? (
            <p>{t('yourCartEmpty')}</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <span>{item.name} - ${item.price}</span>
                  <button onClick={() => removeFromCart(index)}>{t('remove')}</button>
                </div>
              ))}
              <div className="total">
                {t('total')}
                ${calculateTotal()}
              </div>
              <button className="checkout-button" onClick={handleCheckout}>
                {t('checkout')}
              </button>
            </>
          )}
          {showShippingForm && (
            <p>{t('pleaseAddShipping')}</p>
          )}
          <Link to="/">
            <button className="checkout-button">{t('backToMenu')}</button>
          </Link>
        </div>
      );
    };

    export default Cart;
