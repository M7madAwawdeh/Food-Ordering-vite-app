import React from 'react';
    import { Link } from 'react-router-dom';
    import { useTranslation } from 'react-i18next';

    const AccountSettings = ({ saveShippingAddress, initialAddress }) => {
      const { t } = useTranslation();
      return (
        <div>
          <h2>{t('accountTitle')}</h2>
          <p>
            <Link to="/shipping">
              {initialAddress ? t('editShipping') : t('addShipping')}
            </Link>
          </p>
        </div>
      );
    };

    export default AccountSettings;
