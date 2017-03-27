/**
 * Created by Ankush on 3/25/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import Home from './component/Home';

import { Router, Route, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'


const history = createBrowserHistory();


ReactDOM.render(
    <Router history={history}>

        <Route component={Home} path='/'></Route>
    </Router>
    ,  document.getElementById('root'));
