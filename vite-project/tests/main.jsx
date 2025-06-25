import React from "react";
import ReactDOM from 'react-dom/client';

/* import { App } from './HelloWorldApp' */
/* import { FirstApp } from "./FirstApp"; */

import "./style.css"
import { CounterApp } from "./CounterApp";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <CounterApp value={15}/>
    </React.StrictMode>
  );
  
  
  
/*   title="hola soy luismi" subTitle={123456789} */