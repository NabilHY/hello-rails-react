import React from "react";
import { BrowserRoutes as Routes } from "react-router-dom";
import { Routes, Route } from "react-redux";


function App() {
    return (
        <React.StrictMode>
            <Router>
                <Route path="/" index element={<Message />} />
            </Router>
        </React.StrictMode>
    )
}

export default App;