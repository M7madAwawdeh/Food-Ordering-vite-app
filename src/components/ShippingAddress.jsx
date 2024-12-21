import React, { useState, useEffect } from 'react';
    import { useNavigate } from 'react-router-dom';
    import { useTranslation } from 'react-i18next';

    const ShippingAddress = ({ saveShippingAddress, initialAddress }) => {
      const { t } = useTranslation();
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
          <label>{t('nameLabel')}</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>{t('phoneLabel')}</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />

          <label>{t('streetLabel')}</label>
          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />

          <label>{t('cityLabel')}</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />

          <label>{t('zipCodeLabel')}</label>
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
          />

          <button type="submit">{t('saveAddress')}</button>
        </form>
      );
    };

    export default ShippingAddress;
