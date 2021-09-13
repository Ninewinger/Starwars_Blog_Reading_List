import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { NavBar } from './components/NavBar';
import injectContext from './store/appContext';
import { Home } from './views/Home';
import { CharactersView } from './views/CharactersView';
import { PlanetsView } from './views/PlanetsView';
import { VehiclesView } from './views/VehiclesView';
import { Character } from './views/Character';

const Layout = () => {
    return (
        <Router >
            <NavBar />
            <div className="container" >
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/characters" component={CharactersView} />
                    <Route path="/planets" component={PlanetsView} />
                    <Route path="/vehicles" component={VehiclesView} />
                    <Route exact path="/character/:name" component={Character} />

                    <Redirect to="/" />
                </Switch>
            </div >
        </Router>
    )
}

export default injectContext(Layout);