import React from 'react';
import {
BrowserRouter, Switch, Route, Link, NavLink} from 'react-router-dom';
import Cabecera from '../componentes/Cabecera';
import AppUsuarios from '../componentes/AppUsuarios';



const AppRouter = () => (
    <BrowserRouter>
    <div>
            <Cabecera
            titulo='Restaurantes'
            subtitulo='Intelimetrica'
            />
        <Switch>
            <Route path="/" component={AppUsuarios} exact={true} />
            
        </Switch>
    </div>
    </BrowserRouter>
); 
export default AppRouter;

