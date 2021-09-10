import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { NavBar } from './components/NavBar';

export const Layout = () => {
    return (
        <Router >
            <NavBar />
            <div className="container" >
                <h1>Principal</h1>
            </div >
        </Router>
    )
}
