import React from 'react';
import { Route, Switch } from 'react-router';
import HeroSelect from '../pages/HeroSelect';
import MapSelect from '../pages/MapSelect';
import SideSelect from '../pages/SideSelect';
import Login from '../pages/Login';
import Ability from '../pages/Ability';
import AdminPanel from '../pages/AdminPanel';
import AddPost from '../pages/AddPost';
import AddHero from '../pages/AddHero';
import AddMap from '../pages/AddMap';
import AddAbility from '../pages/AddAbility';
import AddTips from '../pages/AddTips';
import DeleteHero from '../pages/DeleteHero';
import DeleteMap from '../pages/DeleteMap';
import DeleteAbility from '../pages/DeleteAbility';
import DeletePost from '../pages/DeletePost';
import DeleteTips from '../pages/DeleteTips';

function AppRouter() {
    return(
        <Switch>
            <Route exact path="/" component={ HeroSelect }/>
            <Route path="/hero-select" component={ HeroSelect }/>
            <Route path="/map-select" component={ MapSelect }/>
            <Route path="/side-select" component={ SideSelect }/>
            <Route path="/ability" component={ Ability }/>
            <Route path="/login" component={ Login }/>
            <Route path="/add-post" component={ AddPost }/>
            <Route path="/add-hero" component={ AddHero }/>
            <Route path="/add-map" component={ AddMap }/>
            <Route path="/add-ability" component={ AddAbility }/>
            <Route path="/add-tips" component={ AddTips }/>
            <Route path="/delete-post" component={ DeletePost }/>
            <Route path="/delete-hero" component={ DeleteHero }/>
            <Route path="/delete-map" component={ DeleteMap }/>
            <Route path="/delete-ability" component={ DeleteAbility }/>
            <Route path="/delete-tips" component={ DeleteTips }/>
            <Route path="/admin-panel" component={ AdminPanel }/>
        </Switch>
    );
}

export default AppRouter;