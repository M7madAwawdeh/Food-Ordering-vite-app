import React, { useState } from 'react';
    import { Link } from 'react-router-dom';

    const menuItems = [
      {
        id: 1,
        name: 'Burger',
        price: 10,
        description: 'Delicious beef burger',
        image: '/burger.jpg',
        category: 'food',
      },
      {
        id: 2,
        name: 'Pizza',
        price: 15,
        description: 'Classic cheese pizza',
        image: '/pizza.jpg',
        category: 'food',
      },
      {
        id: 3,
        name: 'Salad',
        price: 8,
        description: 'Fresh garden salad',
        image: '/salad.jpg',
        category: 'food',
      },
      {
        id: 4,
        name: 'Pasta',
        price: 12,
        description: 'Italian pasta dish',
        image: '/pasta.jpg',
        category: 'food',
      },
      {
        id: 5,
        name: 'Cola',
        price: 3,
        description: 'Refreshing cola',
        image: '/cola.jpg',
        category: 'drink',
      },
      {
        id: 6,
        name: 'Juice',
        price: 4,
        description: 'Fresh orange juice',
        image: '/juice.jpg',
        category: 'drink',
      },
    ];

    const Menu = ({ addToCart, cart }) => {
      const [activeCategory, setActiveCategory] = useState('all');

      const filteredItems =
        activeCategory === 'all'
          ? menuItems
          : menuItems.filter((item) => item.category === activeCategory);

      return (
        <div>
          <div className="filter-container">
            <button
              className={activeCategory === 'all' ? 'active' : ''}
              onClick={() => setActiveCategory('all')}
            >
              All
            </button>
            <button
              className={activeCategory === 'food' ? 'active' : ''}
              onClick={() => setActiveCategory('food')}
            >
              Food
            </button>
            <button
              className={activeCategory === 'drink' ? 'active' : ''}
              onClick={() => setActiveCategory('drink')}
            >
              Drinks
            </button>
          </div>
          <div className="menu-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="menu-item">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            ))}
          </div>
          {cart.length > 0 && (
            <Link to="/cart">
              <button className="view-cart-button">View Cart</button>
            </Link>
          )}
        </div>
      );
    };

    export default Menu;
