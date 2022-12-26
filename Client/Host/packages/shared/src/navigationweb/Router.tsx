import React from 'react';
import { Router as BrowserRouter } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { history } from '../state/InitialiseStore';
import { AnimatedRoutes } from './AnimatedRoutes';
import Navigation from './NavigationContainer';

// for React navigation (mobile) routes see navigaiton/StackNavigator
export const Router = () => {
    React.useEffect(() => {}, [])

    return (
        <BrowserRouter history={history}>
            <Navigation />
            <AnimatedRoutes />
            <Footer />
        </BrowserRouter>
    );
};
