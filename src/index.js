import React from 'react';
import App from "./components/App";
import "./css/main.css";
import ReactDOMClient from 'react-dom/client';


const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
    <main>
        <App />
    </main>);
