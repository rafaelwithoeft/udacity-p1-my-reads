import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './utils/custom.css'

ReactDOM.render(
    <BrowserRouter><App/></BrowserRouter>,
    document.getElementById('root')
);
