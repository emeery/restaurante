import React from 'react';
import {
BrowserRouter, Switch, Route, Link, NavLink} from 'react-router-dom';
import Cabecera from '../componentes/Cabecera';
import Contacto from '../componentes/Contacto';
import AppUsuarios from '../componentes/AppUsuarios';
import PaginaNoEncontrada from '../componentes/PaginaNoEncontrada';
import Portafolio from '../componentes/Portafolio';
import PortafolioItem from '../componentes/PortafolioItem' 


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

// <Route path="/portafolio" component={Portafolio} exact={true} />
//             <Route path="/portafolio/:id" component={PortafolioItem}/>
//             <Route path="/contacto" component={Contacto} />
//             <Route component={PaginaNoEncontrada} />