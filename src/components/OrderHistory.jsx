import React from 'react';
    import { useTranslation } from 'react-i18next';

    const OrderHistory = ({ orders }) => {
      const { t } = useTranslation();
      return (
        <div className="order-history">
          <h2>{t('orderHistoryTitle')}</h2>
          {orders.length === 0 ? (
            <p>{t('noOrders')}</p>
          ) : (
            orders.map((order, index) => (
              <div key={index} className="order-item">
                <h3>
                  {t('order')}
                  {index + 1}
                </h3>
                <p>
                  <strong>{t('orderDate')}</strong> {order.orderDate}
                </p>
                <h4>{t('items')}</h4>
                <ul>
                  {order.items.map((item) => (
                    <li key={item.id}>
                      {item.name} - ${item.price}
                    </li>
                  ))}
                </ul>
                <h4>{t('shipping')}</h4>
                <p>
                  <strong>{t('name')}</strong> {order.shippingAddress.name}
                </p>
                <p>
                  <strong>{t('phone')}</strong> {order.shippingAddress.phoneNumber}
                </p>
                <p>
                  <strong>{t('street')}</strong> {order.shippingAddress.street}
                </p>
                <p>
                  <strong>{t('city')}</strong> {order.shippingAddress.city}
                </p>
                <p>
                  <strong>{t('zipCode')}</strong> {order.shippingAddress.zipCode}
                </p>
              </div>
            ))
          )}
        </div>
      );
    };

    export default OrderHistory;
