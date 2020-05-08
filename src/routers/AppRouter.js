import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import NotFound from '../components/NotFound';
import Header from '../components/Header';

const AppRouter = (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/create' component={AddExpense} />
            <Route path='/edit' component={EditExpense} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;