import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { NavBar } from './components/NavBar';
import injectContext from './store/appContext';
import { CharactersView } from './views/CharactersView';
import { Home } from './views/Home';
import { PlanetsView } from './views/PlanetsView';

const Layout = () => {
    return (
        <Router >
            <NavBar />
            <div className="container" >
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/characters" component={CharactersView} />
                    <Route path="/planets" component={PlanetsView} />

                    <Redirect to="/" />
                </Switch>
            </div >
        </Router>
    )
}

export default injectContext(Layout);