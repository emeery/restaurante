import React from 'react';

class AppUsuarios extends React.Component {
    constructor() {
        super();
        this.state={
            usuarios:[],
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
            console.log(data)    
            this.setState({usuarios:data})
        })
        
    }
    removerItem = () => {
        const item = this.state
        }
    render(){
        
        return(<div className='usuarios-contenedor'>
            
            <h2><p>
            Lista de Usuarios</p> 
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


const ListaContacto = (props) => (
    <div>
        {
            props.usuarios.map((datoDinamico, i)=>
                <Contacto
                contador={i+1}
                key={datoDinamico.id}
                nombre={datoDinamico.name}
                sitio={datoDinamico.contact.site}
                telefono={datoDinamico.contact.phone}
                estado={datoDinamico.address.state}
                ciudad={datoDinamico.address.city}
                usuarios={props.usuarios}
                latitud={datoDinamico.address.location.lat}
                longitud={datoDinamico.address.location.lng}
                /> 
            )
        }        
    </div>
)

const Contacto = (props) => (
    <div className='usuario-contenedor'>
    <p> Nombre: <span
    > {props.nombre} </span></p>
    
        <div className='usuario-contenedor__contacto'>
            <h5>Contacto Info.</h5>
                <hr></hr>
            <p> Página : <a 
            href={props.sitio} 
            target="_blank"
            > {props.sitio} </a> </p>  
             
            <p> tel: <span style={{color:'lightsalmon'}}
            > {props.telefono} </span> -
            <a
            href="https://www.facebook.com/" >
            <i 
            className="fab fa-facebook-f fa-2x"
            > </i>
            </a>
            </p> 
            
            <p>direccion: {props.estado}, {props.ciudad}</p>
            
            <p>lat: <span style={{color:'lightblue'}} 
             > {props.latitud} </span>, lng:
            <span style={{color:'lightblue'}}
            >{props.longitud}</span>
            </p>

        </div>
    </div>
)

