import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from "./Components/Auth/Auth";
import Main from "./STYLES/Main.scss";
import routes from "./routes";

function App() {
  return (
    <div className="App">
    {/* <Auth /> */}
    {routes}
      
    </div>
  );
}

export default App;
