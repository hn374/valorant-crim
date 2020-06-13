import React from 'react';
import { Route, Switch } from 'react-router';
import HeroSelect from '../pages/HeroSelect';
import MapSelect from '../pages/MapSelect';
import SideSelect from '../pages/SideSelect';
import AddPost from '../pages/AddPost';
import Login from '../pages/Login';
import Ability from '../pages/Ability';

function AuthRouter() {
    return(
        <Switch>
            <Route exact path="/" component={ HeroSelect }/>
            <Route path="/hero-select" component={ HeroSelect }/>
            <Route path="/map-select" component={ MapSelect }/>
            <Route path="/side-select" component={ SideSelect }/>
            <Route path="/ability" component={ Ability }/>
            <Route path="/login" component={ Login }/>
            <Route path="/add-post" component={ AddPost }/>
        </Switch>
    );
}

export default AuthRouter;