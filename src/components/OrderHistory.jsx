import React from 'react';

    const OrderHistory = ({ orders }) => {
      return (
        <div className="order-history">
          <h2>Order History</h2>
          {orders.length === 0 ? (
            <p>No orders placed yet.</p>
          ) : (
            orders.map((order, index) => (
              <div key={index} className="order-item">
                <h3>Order #{index + 1}</h3>
                <p>
                  <strong>Order Date:</strong> {order.orderDate}
                </p>
                <h4>Items:</h4>
                <ul>
                  {order.items.map((item) => (
                    <li key={item.id}>
                      {item.name} - ${item.price}
                    </li>
                  ))}
                </ul>
                <h4>Shipping Address:</h4>
                <p>
                  <strong>Name:</strong> {order.shippingAddress.name}
                </p>
                <p>
                  <strong>Phone:</strong> {order.shippingAddress.phoneNumber}
                </p>
                <p>
                  <strong>Street:</strong> {order.shippingAddress.street}
                </p>
                <p>
                  <strong>City:</strong> {order.shippingAddress.city}
                </p>
                <p>
                  <strong>Zip Code:</strong> {order.shippingAddress.zipCode}
                </p>
              </div>
            ))
          )}
        </div>
      );
    };

    export default OrderHistory;
