import React from 'react';
import './Footer.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';

function Content() {
    return (
        <div className="content">
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
            </Switch>
        </div>
    )
}

export default Content
