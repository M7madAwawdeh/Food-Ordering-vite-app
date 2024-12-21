import React, { useState } from 'react';
    import { Routes, Route, Link } from 'react-router-dom';
    import Menu from './components/Menu';
    import Cart from './components/Cart';
    import ShippingAddress from './components/ShippingAddress';
    import AccountSettings from './components/AccountSettings';
    import OrderHistory from './components/OrderHistory';

    const App = () => {
      const [cart, setCart] = useState([]);
      const [shippingAddress, setShippingAddress] = useState(null);
      const [orders, setOrders] = useState([]);
      const [isSidebarVisible, setIsSidebarVisible] = useState(true);

      const addToCart = (item) => {
        setCart([...cart, item]);
      };

      const removeFromCart = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
      };

      const saveShippingAddress = (address) => {
        setShippingAddress(address);
      };

      const placeOrder = () => {
        if (cart.length > 0 && shippingAddress) {
          const order = {
            items: cart,
            shippingAddress: shippingAddress,
            orderDate: new Date().toLocaleDateString(),
          };
          setOrders([...orders, order]);
          setCart([]);
          alert('Order placed successfully!');
        } else {
          alert('Please add items to cart and shipping address.');
        }
      };

      const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
      };

      return (
        <div className="app-container">
          <aside className={`sidebar ${isSidebarVisible ? '' : 'hidden'}`}>
            <div
              className={`menu-icon ${isSidebarVisible ? 'close' : 'open'}`}
              onClick={toggleSidebar}
            >
              {isSidebarVisible ? '✕' : '☰'}
            </div>
            <h2>FINTKS Food Ordering</h2>
            <ul>
              <li>
                <Link to="/" onClick={() => setIsSidebarVisible(false)}>Home</Link>
              </li>
              <li>
                <Link to="/cart" onClick={() => setIsSidebarVisible(false)}>Cart</Link>
              </li>
              <li>
                <Link to="/shipping" onClick={() => setIsSidebarVisible(false)}>Shipping Address</Link>
              </li>
              <li>
                <Link to="/orders" onClick={() => setIsSidebarVisible(false)}>Order History</Link>
              </li>
              <li>
                <Link to="/account" onClick={() => setIsSidebarVisible(false)}>Account Settings</Link>
              </li>
            </ul>
          </aside>
          <main className="content">
            <div className="container">
              <div className="header">
                <div
                  className={`menu-icon ${isSidebarVisible ? 'close' : 'open'}`}
                  onClick={toggleSidebar}
                >
                  {isSidebarVisible ? '✕' : '☰'}
                </div>
                <h1>Food Ordering App</h1>
              </div>
              <Routes>
                <Route
                  path="/"
                  element={<Menu addToCart={addToCart} cart={cart} />}
                />
                <Route
                  path="/cart"
                  element={
                    <Cart
                      cart={cart}
                      removeFromCart={removeFromCart}
                      shippingAddress={shippingAddress}
                      placeOrder={placeOrder}
                    />
                  }
                />
                <Route
                  path="/shipping"
                  element={
                    <ShippingAddress
                      saveShippingAddress={saveShippingAddress}
                      initialAddress={shippingAddress}
                    />
                  }
                />
                <Route
                  path="/orders"
                  element={<OrderHistory orders={orders} />}
                />
                <Route
                  path="/account"
                  element={
                    <AccountSettings
                      saveShippingAddress={saveShippingAddress}
                      initialAddress={shippingAddress}
                    />
                  }
                />
              </Routes>
            </div>
          </main>
        </div>
      );
    };

    export default App;
