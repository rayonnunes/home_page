import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './config/multiLanguage/i18n'
import Views from './Views';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Views />
    </I18nextProvider>
  );
}

export default App;
