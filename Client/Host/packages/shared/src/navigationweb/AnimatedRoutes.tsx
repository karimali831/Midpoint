import { AnimatePresence } from 'framer-motion'
import React from "react"
import { Route, Switch, useLocation } from "react-router-dom"
import { Routes } from "../router/Routes"

export const AnimatedRoutes = () => {

    React.useEffect(() => { }, [])

    const location = useLocation()

    return (
        <AnimatePresence>
            <Switch location={location} key={location.pathname}>
                {Routes.map((route, idx) =>
                    <Route
                        key={idx}
                        path={route.path}
                        component={route.component}
                        exact={true}
                        strict={true}
                    />
                )}
            </Switch>
        </AnimatePresence>
    )
}