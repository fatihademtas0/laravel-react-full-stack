import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider} from "react-router-dom";
import {ContextProvider} from "./contexts/ContextProvider.jsx";
import router from "./router.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ContextProvider>
            <RouterProvider router={router}/>
        </ContextProvider>
    </StrictMode>,
)
