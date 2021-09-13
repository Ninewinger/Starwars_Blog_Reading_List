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
import { Character } from './views/Character';
import { StarshipsView } from './views/StarshipsView';
import { Planets } from './views/Planets';
import { Starship } from './views/Starship';

const Layout = () => {
    return (
        <Router >
            <NavBar />
            <div className="container" >
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/characters" component={CharactersView} />
                    <Route path="/planets" component={PlanetsView} />
                    <Route path="/starships" component={StarshipsView} />
                    <Route exact path="/character/:name" component={Character} />
                    <Route exact path="/planet/:namePlanet" component={Planets} />
                    <Route exact path="/starship/:nameStarship" component={Starship} />

                    <Redirect to="/" />
                </Switch>
            </div >
        </Router>
    )
}

export default injectContext(Layout);