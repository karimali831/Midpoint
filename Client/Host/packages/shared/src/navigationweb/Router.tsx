import React from 'react';
import { Route, Router as BrowserRouter, Switch } from 'react-router-dom';
import { Routes } from '../router/Routes';
import { history } from '../state/InitialiseStore';
import Navigation from './NavigationContainer';

// for React navigation (mobile) routes see navigaiton/StackNavigator
export const Router = () => {
    console.log('[RENDER] Router');

    return (
        <BrowserRouter history={history}>
            <Navigation />
            <Switch>
                {Routes.map((route, idx) => (
                    <Route
                        key={idx}
                        path={route.url}
                        component={route.component}
                        exact={true}
                        strict={true}
                    />
                ))}
            </Switch>
        </BrowserRouter>
    );
};
