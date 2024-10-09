import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';

const app = document.getElementById('app');

if (app !== null) {
    createRoot(app).render(
        <HashRouter>
            <App />
        </HashRouter>
    );
}
