import React from 'react';
import Routes from './routes'

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';

const App = () => {

  return (
    <>
      <Header />
      <Routes />
      <GlobalStyles />
    </>
  );
}

export default App;
