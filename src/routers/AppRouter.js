import React from 'react';
import {
BrowserRouter, Switch, Route, Link, NavLink} from 'react-router-dom';
import AppUsuarios from '../componentes/Usuarios/AppUsuarios';
import AppPeliculas from '../componentes/Peliculas/AppPeliculas';

const AppRouter = () => (
    <BrowserRouter>
    <div>
            
        <Switch>
            <Route path="/" component={AppUsuarios} exact={true} />
            <Route path="/peliculas" component={AppPeliculas} exact={true} />
        </Switch>
    </div>
    </BrowserRouter>
); 
export default AppRouter;

