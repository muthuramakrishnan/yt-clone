import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';

import App from './App';
import './_base.scss';


ReactDOM.render(
<Provider store={store}>
    <Router>
        <App/>
    </Router>
</Provider>, document.getElementById('root'));