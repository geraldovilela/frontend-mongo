import React from 'react';
import { Header } from './components/Header';
import { LoginPage } from './components/LoginPage';
import { GlobalStyle } from './styles/global';


function App() {
  return (
    <>
      <Header></Header>
      <LoginPage></LoginPage>
      <GlobalStyle/>
    </>
  );
}

export default App;
