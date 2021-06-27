import React from 'react';
import { Header } from './components/Header';
import { LoginPage } from './components/LoginPage';
import { GlobalStyle } from './styles/global';
import {RegisterPage} from './components/RegisterPage';


function App() {
  return (
    <>
      <LoginPage></LoginPage>
      <GlobalStyle/>
    </>
  );
}

export default App;
