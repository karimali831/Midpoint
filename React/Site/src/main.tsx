import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import { CustomRouter } from './router/Router'
import { history } from './state/InitialiseStore'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // <React.StrictMode>
        <CustomRouter history={history}>
            <App />
        </CustomRouter>
    // </React.StrictMode>,
)
