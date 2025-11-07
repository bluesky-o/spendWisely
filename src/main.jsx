import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './firebase/config.js'
import { registerSW } from 'virtual:pwa-register'

// eslint-disable-next-line
const updateSW = registerSW({
    onNeedRefresh() {},
    onOfflineReady() {},
})

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
