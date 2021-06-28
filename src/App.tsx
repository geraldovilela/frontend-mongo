import { GlobalStyle } from './styles/global';
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom"

import { Routes } from "./routes";

function App() {

  return (
    <Router>
      <AuthProvider>
        <Routes/>
      </AuthProvider>

      <GlobalStyle />
    </Router>
  );
}

export default App;
