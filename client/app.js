/**
 * Created by Ankush on 3/25/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import { Route, Router, useRouterHistory } from 'react-router';
import { createHistory }  from 'history';

import Home from './component/Home';


const appHistory = useRouterHistory(createHistory)({queryKey: false});

ReactDOM.render(<Router history={appHistory}> <Route name='home' path='/' component={Home}> </Route></Router>);
