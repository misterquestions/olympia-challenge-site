import React from 'react';
import { useTranslation } from 'react-i18next';

const IndexPage: React.FC = () => {
  const { t } = useTranslation();

  return <p>{t('index.hello')}</p>;
};

export default IndexPage;
