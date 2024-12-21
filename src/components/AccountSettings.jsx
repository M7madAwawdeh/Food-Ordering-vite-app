import React from 'react';
    import { Link } from 'react-router-dom';

    const AccountSettings = ({ saveShippingAddress, initialAddress }) => {
      return (
        <div>
          <h2>Account Settings</h2>
          <p>
            <Link to="/shipping">
              {initialAddress ? 'Edit Shipping Address' : 'Add Shipping Address'}
            </Link>
          </p>
        </div>
      );
    };

    export default AccountSettings;
