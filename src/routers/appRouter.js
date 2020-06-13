import React from 'react';
import { Route, Switch } from 'react-router';
import HeroSelect from '../pages/HeroSelect';
import MapSelect from '../pages/MapSelect';
import SideSelect from '../pages/SideSelect';
import Login from '../pages/Login';
import Ability from '../pages/Ability';
import AdminPanel from '../pages/AdminPanel';
import AddPost from '../pages/AddPost';
import DeletePost from '../pages/DeletePost';

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
            <Route path="/delete-post" component={ DeletePost }/>
            <Route path="/admin-panel" component={ AdminPanel }/>
        </Switch>
    );
}

export default AppRouter;