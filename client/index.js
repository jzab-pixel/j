import React from 'react'
import  { createRoot }  from 'react-dom/client';
import App from './src/App.js'
import { BrowserRouter, Route, Routes } from "react-router-dom";


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);