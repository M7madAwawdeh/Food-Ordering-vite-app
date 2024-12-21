import React, { useState, useEffect } from 'react';
    import { useNavigate } from 'react-router-dom';

    const ShippingAddress = ({ saveShippingAddress, initialAddress }) => {
      const navigate = useNavigate();
      const [name, setName] = useState('');
      const [phoneNumber, setPhoneNumber] = useState('');
      const [street, setStreet] = useState('');
      const [city, setCity] = useState('');
      const [zipCode, setZipCode] = useState('');

      useEffect(() => {
        if (initialAddress) {
          setName(initialAddress.name || '');
          setPhoneNumber(initialAddress.phoneNumber || '');
          setStreet(initialAddress.street || '');
          setCity(initialAddress.city || '');
          setZipCode(initialAddress.zipCode || '');
        }
      }, [initialAddress]);

      const handleSubmit = (e) => {
        e.preventDefault();
        const address = { name, phoneNumber, street, city, zipCode };
        saveShippingAddress(address);
        navigate('/account');
      };

      return (
        <form className="shipping-form" onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Phone Number:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />

          <label>Street:</label>
          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />

          <label>City:</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />

          <label>Zip Code:</label>
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
          />

          <button type="submit">Save Address</button>
        </form>
      );
    };

    export default ShippingAddress;
