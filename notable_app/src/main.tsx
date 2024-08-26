import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PrimarySearchAppBar from './component/Navbar';
ReactDOM.render(
  <React.StrictMode>
   <PrimarySearchAppBar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// reportWebVitals(console.log);