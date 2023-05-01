import { AnimatePresence } from 'framer-motion'
import { Route, Routes } from "react-router-dom"
import { Home } from '../components/Home'
import { Login } from '../components/Login'
import { Dashboard } from '../components/Dashboard'

export const AnimatedRoutes = () => {
    return (
        <AnimatePresence>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/dashboard/:midPointJoinId*/' element={<Dashboard />} />

                {/* {Routess.map((route, idx) =>
                    <Route
                        key={idx}
                        path={route.path}
                        Component={route.component}
                    />
                )} */}
            </Routes>
        </AnimatePresence>
    )
}