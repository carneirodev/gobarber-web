import React from 'react';
import GlobalStyle from './styles/global';

import SignIn from './pages/SingIn';
// import SignUp from './pages/SingUp';

import AppProvider from './hooks';

function App() {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>

      <GlobalStyle />
    </>
  );
}

export default App;
