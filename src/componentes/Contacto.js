import React from 'react';
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
export default Contacto;