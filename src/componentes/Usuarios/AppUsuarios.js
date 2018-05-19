import React from 'react';
import Cabecera from './Cabecera';

import ListaContacto from './ListaContacto';


class AppUsuarios extends React.Component {
    constructor() {
        super();
        this.state={
            usuarios:[] ,
            nombre:''   ,
            sitio:''    ,
            telefono:'' ,
            estado:''   ,
            direccion:'',
            ciudad:''   ,
            lat:''      ,
            lon:''

        }
    }
    componentDidMount() {
        this.unRecurso();
    }
    unRecurso = () => {
        fetch('https://api.myjson.com/bins/1femoq')
        .then(res => res.json() )
        .then((data) => 
        {
            var mapeo = data.map(function(eldato, i) {
                
                var minusculas = eldato.name.toLowerCase();

                return { index: i, nombre: minusculas }
            })
            
            var orden = mapeo.sort((a,b) => {
                if(a.nombre > b.nombre) {
                    return 1;
                }
                if (a.nombre < b.nombre) {
                    return 0;
                }
                return 0;
            });
             
            //console.log(orden);

            this.setState({usuarios:data})
        })
    }
    render(){
        return(<div className='usuarios-contenedor'>
                <Cabecera
                titulo='Restaurantes'
                
                />
            <h2>
            <p>Lista de Usuarios</p> 
            <hr/>
            <a  
            href="https://github.com/emeery/restaurante"
            target="_blank" 
            aria-hidden="true">
            <i className="fab fa-github fa-1x"></i></a>
            &nbsp;
            
            </h2>
            
            <center>
                <ListaContacto
                nombre={this.state.nombre}
                usuarios={this.state.usuarios}
                sitio={this.state.sitio}
                telefono={this.state.telefono}
                direccion={this.state.direccion}
                estado={this.state.estado}
                ciudad={this.state.ciudad}
                latitud={this.state.lat}
                longitud={this.state.Página} />
            </center>
        </div>);
    }
} 
export default AppUsuarios;



