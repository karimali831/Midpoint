import React from 'react';
import { Router as BrowserRouter } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { history } from '../state/InitialiseStore';
import { AnimatedRoutes } from './AnimatedRoutes';
import Navigation from './NavigationContainer';

// for React navigation (mobile) routes see navigaiton/StackNavigator
export const Router = () => {
    console.log('[RENDER] Router');

    // const location = useLocation()
    // const path = location.pathname

    console.log(location)

    // const [currentPage, setCurrentPage] = useState<string>(path)
    // const [curPageOrder, setCurPageOrder] = useState<number>(0)
    // const [newPageOrder, setNewPageOrder] = useState<number>(0)
    // const [pageDirection, setPageDirection] = useState<'left' | 'right'>('left')

    React.useEffect(() => {
        // setCurrentOrder(path)
    }, [])

    // React.useEffect(() => {
    //     let newPage = Routes.filter(x => x.path === location.pathname)[0].path
    //     let newPageOrder = Routes.filter((page) => {
    //         return page.path === newPage;
    //     });


    //     let curPageOrder = Routes.filter((page) => {
    //         return page.path === currentPage;
    //     })

    //     if (newPage !== currentPage) {
    //         const direction = curPageOrder[0].order < newPageOrder[0].order ? 'left' : 'right';
    //         setCurrentPage(newPage)
    //         setPageDirection(direction)
    //         setCurPageOrder(curPageOrder[0].order)
    //         setNewPageOrder(newPageOrder[0].order)

    //     }
    // }, [location.pathname])

    // const setCurrentOrder = (path: string) => {
    //     let curPageOrder = Routes.filter((page) => {
    //         return page.path === path;
    //     });

    //     return curPageOrder[0].order;
    // }

    // const currentKey = location.pathname.split("/")[1] || "/";

    return (
        <BrowserRouter history={history}>
            <Navigation />
            {/* <div className='wrap' style={{ flex: 1 }}>
                <TransitionGroup className={`transition-group left`}>
                    <CSSTransition
                        timeout={{ enter: 800, exit: 400 }}
                        classNames={'transition-wrap'}

                    >

                        <section className={`route-section fade`}> */}
            <AnimatedRoutes />
            {/* </section>

                    </CSSTransition>
                </TransitionGroup>
            </div> */}
            <Footer />
        </BrowserRouter>
    );
};
