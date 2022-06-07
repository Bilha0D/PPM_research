// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
import App from './App';


// import i18n (needs to be bundled ;)) 
import './i18n';

const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')

// );




