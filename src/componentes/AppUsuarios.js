import React from 'react';

class AppUsuarios extends React.Component {
    constructor() {
        super();
        this.state={
            usuarios:[],
            nombre:''  ,
            sitio:''   ,
            telefono:'',
            estado:''  ,
            direccion:''

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
    render(){
        
        return(<div className='usuarios-contenedor'>
            
            <h2>Lista de Usuarios</h2>
            <ListaContacto
            nombre={this.state.nombre}
            usuarios={this.state.usuarios}
            sitio={this.state.sitio}
            telefono={this.state.telefono}
            />
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
            <p> Restaurante: <a 
            href={props.sitio} 
            target="_blank"
            > {props.sitio} </a> </p>  
             
            <p> tel: <span
            > {props.telefono} </span></p> 
            
            

        </div>
    </div>
)