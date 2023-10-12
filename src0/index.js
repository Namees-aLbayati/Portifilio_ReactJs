import React from "react";
import {createRoot} from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css';


const root=createRoot(document.getElementById('root'));
root.render(<App/>)